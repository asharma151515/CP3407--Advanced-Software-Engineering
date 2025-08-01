// src/server.js
const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// mailer.js
const nodemailer = require('nodemailer');

require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: 'smtp.mailgun.org',
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAILGUN_USER,
    pass: process.env.MAILGUN_PASS,
  },
});


// Send mail function
async function sendMail(to, subject, text, html) {
  try {
    const info = await transporter.sendMail({
      from: '"Cleaners" <asmita.sharma@my.jcu.edu.au>', // sender address
      to: to, // list of receivers
      subject: subject,
      text: text, // plain text
      html: html, // html body (optional)
    });
    console.log('Message sent: %s', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}


const app = express();
const PORT = process.env.PORT || 3000;

// Initialize SQLite database
const db = new sqlite3.Database('./users.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the SQLite database.');
});

// Create tables if they don't exist
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_name TEXT,
    email TEXT UNIQUE,
    password TEXT,
    dob TEXT,
    area TEXT,
    phone TEXT
  )`, (err) => {
    if (err) {
      console.error('Error creating users table:', err.message);
    }
  });

// Create the table
db.run(`CREATE TABLE IF NOT EXISTS cleaners (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    description TEXT,
    languages TEXT,
    services TEXT,
    price INTEGER,
    country TEXT,
    image TEXT
)`, (err) => {
    if (err) {
        console.error('Error creating cleaners table:', err.message);
    } else {
        // Check if the table is empty
        db.get("SELECT COUNT(*) as count FROM cleaners", (err, result) => {
            if (err) {
                console.error("Error checking cleaners table:", err.message);
                return;
            }

            if (result.count === 0) {
                // Table is empty — insert the dummy data
                const cleaners = [
                    { id: 1, name: "Chen Li", languages: ["Mandarin", "English"], services: ["Mopping", "Vacuuming"], hourlyRate: 25, country: "China", description: "10+ years experience in residential cleaning.", image: "1.png" },
                    { id: 2, name: "Aung Moe", languages: ["Burmese", "English"], services: ["Dusting", "Deep Cleaning"], hourlyRate: 22, country: "Myanmar", description: "Skilled in deep cleaning techniques.", image: "2.png" },
                    { id: 3, name: "Maria Santos", languages: ["Tagalog", "English"], services: ["Laundry", "Ironing"], hourlyRate: 20, country: "Philippines", description: "Expert in fabric care and ironing.", image: "3.png" },
                    { id: 4, name: "Preeti Sethi", languages: ["Hindi", "English"], services: ["Carpet Cleaning", "Window Cleaning"], hourlyRate: 23, country: "India", description: "Specializes in tough stain removal.", image: "4.png" },
                    { id: 5, name: "Binod Karki", languages: ["Nepali", "English"], services: ["Kitchen Cleaning", "Bathroom Sanitization"], hourlyRate: 24, country: "Nepal", description: "Expert in hygiene and sanitization.", image: "5.png" },
                    { id: 6, name: "Andi Putra", languages: ["Indonesian", "English"], services: ["General Cleaning", "Organizing"], hourlyRate: 21, country: "Indonesia", description: "Focuses on efficient home organization.", image: "6.png" },
                    { id: 7, name: "Mai Davika Hoorne", languages: ["Thai", "English"], services: ["Kitchen Cleaning", "Bathroom Sanitization"], hourlyRate: 24, country: "Thailand", description: "Expert in hygiene and sanitization.", image: "7.png" },
                    { id: 8, name: "Yureni Noshika", languages: ["Sinhala", "English"], services: ["General Cleaning", "Organizing"], hourlyRate: 21, country: "Sri Lanka", description: "Focuses on efficient home organization.", image: "8.png" }
                ];

                cleaners.forEach(cleaner => {
                    db.run(
                        `INSERT INTO cleaners (name, description, languages, services, price, country, image) VALUES (?, ?, ?, ?, ?, ?, ?)`,
                        [
                            cleaner.name,
                            cleaner.description,
                            cleaner.languages.join(", "),
                            cleaner.services.join(", "),
                            cleaner.hourlyRate,
                            cleaner.country,
                            cleaner.image
                        ],
                        (err) => {
                            if (err) {
                                console.error(`Error inserting ${cleaner.name}:`, err.message);
                            }
                        }
                    );
                });
                console.log(' All cleaners inserted successfully!');
            } else {
                console.log(' Cleaners table already contains data, skipping insertion.');
            }
        });
    }
});



  db.run(`CREATE TABLE IF NOT EXISTS availability (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT,
    startTime TEXT,
    endTime TEXT,
    cleanerId INTEGER,
    FOREIGN KEY (cleanerId) REFERENCES cleaners(id)
  )`, (err) => {
    if (err) {
      console.error('Error creating availability table:', err.message);
    }
  });

  db.run(`CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customerName TEXT,
    customerEmail TEXT,
    customerId INTEGER,
    date TEXT,
    startTime TEXT,
    endTime TEXT,
    cleanerId INTEGER,
    amount REAL,
    status TEXT,
    FOREIGN KEY (cleanerId) REFERENCES cleaners(id)
  )`, (err) => {
    if (err) {
      console.error('Error creating bookings table:', err.message);
    }
  });
});


// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

const bcrypt = require('bcrypt'); // Add at top //this also unused

const session = require('express-session');

app.use(session({
  secret: process.env.SECRET_KEY, // change this to a secure random key
  resave: false,
  saveUninitialized: false,
}));




// ─── Route: POST /api/register ───────────────────────────────────────────────
app.post('/register', async (req, res) => {
  try {
    const { user_name, email, dob, area, phone, password, confirm_password } = req.body;

    // Check if fields are valid
    if (!user_name || !email || !password || !dob || !area || !phone || !confirm_password || password !== confirm_password) {
      return res.redirect('/register?error=Missing+or+invalid+data');
    }

    db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
      if (err) {
        return res.redirect('/register?error=Database+error');
      }
      if (row) {
        return res.redirect('/register?error=Email+already+registered');
      }

      db.run(
        'INSERT INTO users (user_name, email, password, dob, area, phone) VALUES (?, ?, ?, ?, ?, ?)',
        [user_name, email, password, dob, area, phone],
        function (err) {
          if (err) {
            return res.redirect('/register?error=Something+went+wrong');
          }
          // ✅ Success
          return res.redirect('/register?success=User+registered+successfully');
        }
      );
    });
  } catch (err) {
    console.error('Registration Error:', err);
    return res.redirect('/register?error=Something+went+wrong');
  }
});


// ─── Route: POST /api/login ──────────────────────────────────────────────────
app.post('/login', async (req, res) => {
  const { login_email, login_password } = req.body;

  db.get('SELECT * FROM users WHERE email = ?', [login_email], (err, user) => {
    if (!user) {
      return res.status(401).json({ error: 'Invalid email.' });
    }

    const passwordMatch = login_password === user.password; // use bcrypt in real apps
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid password.' });
    }

    // Save user info in session
    req.session.user = {
      id: user.id,
      name: user.user_name,
      email: user.email
    };

    return res.json({
      message: 'Login successful.',
      redirect: '/dashboard',
      user: req.session.user
    });
  });
});


app.get('/api/user/dashboard', (req, res) => {
   const user = req.session.user;

  if (!user || !user.id) {
    return res.status(401).json({ error: 'User not logged in' });
  }

  const customerId = user.id;

  const sql = `
    SELECT b.id, b.date, b.startTime, b.endTime, b.amount, b.status,
           c.name AS cleanerName
    FROM bookings b
    JOIN cleaners c ON b.cleanerId = c.id
    WHERE b.customerId = ?
    ORDER BY b.date DESC, b.startTime ASC
  `;

  db.all(sql, [customerId], (err, rows) => {
    if (err) {
      console.error('Error fetching bookings:', err.message);
      return res.status(500).json({ error: 'Database error' });
    }
	console.log(customerId, rows);
    res.json(rows);
  });
});


// ─── Route: GET /api/cleaner (list all) ────────────────────────────────────────
app.get('/api/cleaner', (req, res) => {
  db.all('SELECT * FROM cleaners', [], (err, cleaners) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to retrieve cleaners.' });
    }
    res.json(cleaners);
  });
});

// ─── Route: POST /api/cleaner (create/update) ──────────────────────────────────
app.get('/api/cleaners', (req, res) => {
  const query = `SELECT * FROM cleaners`;

  db.all(query, (err, rows) => {
    if (err) {
      console.error('Error fetching cleaners:', err);
      return res.status(500).json({ error: 'Failed to fetch cleaners' });
    }

    // Parse comma-separated fields back into arrays
    const cleaners = rows.map(row => ({
      id: row.id,
      name: row.name,
      description: row.description,
      languages: row.languages ? row.languages.split(',').map(s => s.trim()) : [],
      services: row.services ? row.services.split(',').map(s => s.trim()) : [],
      hourlyRate: row.price,
      country: row.country,
      image: row.image
    }));

    res.json(cleaners);
  });
});
// ─── Route: GET /api/availability (list all) ───────────────────────────────────
app.get('/api/availability', (req, res) => {
  db.all('SELECT * FROM availability', [], (err, slots) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to retrieve availability.' });
    }
    res.json(slots);
  });
});

// ─── Route: POST /api/availability (add slot) ──────────────────────────────────
app.post('/api/availability', (req, res) => {
  const { date, startTime, endTime, cleanerId } = req.body;
  if (!date || !startTime || !endTime || !cleanerId) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  const slot = { date, startTime, endTime, cleanerId };
  db.run('INSERT INTO availability (date, startTime, endTime, cleanerId) VALUES (?, ?, ?, ?)', 
    [slot.date, slot.startTime, slot.endTime, slot.cleanerId], 
    function(err) {
      if (err) {
        return res.status(500).json({ error: 'Failed to add availability slot.' });
      }
      return res.status(201).json({ message: 'Availability slot added.', slot: { id: this.lastID, ...slot } });
    });
});

// ─── Route: POST /api/booking (submit booking) ─────────────────────────────────
app.post('/api/booking', (req, res) => {
  const { customerName, customerEmail, date, startTime, endTime, cleanerId, amount } = req.body;
  if (!customerName || !customerEmail || !date || !startTime || !endTime || !cleanerId || !amount) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  const booking = { customerName, customerEmail, date, startTime, endTime, cleanerId, amount, status: 'pending' };
  db.run('INSERT INTO bookings (customerName, customerEmail, date, startTime, endTime, cleanerId, amount, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', 
    [booking.customerName, booking.customerEmail, booking.date, booking.startTime, booking.endTime, booking.cleanerId, booking.amount, booking.status], 
    function(err) {
      if (err) {
        return res.status(500).json({ error: 'Failed to submit booking.' });
      }
      console.log(`Notification: New booking #${this.lastID} for Cleaner ${cleanerId}`);
      return res.status(201).json({ message: 'Booking submitted.', booking: { id: this.lastID, ...booking } });
    });
});


//─── Route: POST /api/send-confirmation ───────────────────────────────────
app.post("/api/send-confirmation", async (req, res) => {
  const user = req.session.user;
  if (!user) {
    return res.status(401).json({ message: "User not logged in." });
  }

  const { cleanerName, clientEmail, date, startTime, endTime, service, contact } = req.body;
  const clientName = user.name;
  //const clientEmail = user.email;
  const customerId = user.id;

  const subject = "Your Cleaning Booking Confirmation";
  const text = `Hello ${clientName},\n\nYour booking with ${cleanerName} is confirmed for ${date} from ${startTime} to ${endTime}.\nService: ${service}\nContact: ${contact}\n\nThank you!`;
  const html = `
    <h3>Booking Confirmation</h3>
    <p><strong>Cleaner:</strong> ${cleanerName}</p>
    <p><strong>Name:</strong> ${clientName}</p>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Time:</strong> ${startTime} to ${endTime}</p>
    <p><strong>Service:</strong> ${service}</p>
    <p><strong>Contact:</strong> ${contact}</p>
  `;

  db.get('SELECT id, price FROM cleaners WHERE name = ?', [cleanerName], (err, cleaner) => {
    if (err || !cleaner) {
      console.error("Cleaner lookup failed:", err);
      return res.status(400).json({ message: "Cleaner not found." });
    }

    const cleanerId = cleaner.id;
    const hourlyRate = cleaner.price;
    const amount = hourlyRate * 3;
    const status = "confirmed";

    db.run(
      'INSERT INTO bookings (customerId, customerName, customerEmail, date, startTime, endTime, cleanerId, amount, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [customerId, clientName, clientEmail, date, startTime, endTime, cleanerId, amount, status],
      async function (err) {
        if (err) {
          console.error("Booking insert failed:", err.message);
          return res.status(500).json({ message: "Failed to save booking." });
        }

        try {
          await sendMail(clientEmail, subject, text, html);
          return res.status(200).json({ message: "Booking saved and email sent", bookingId: this.lastID });
        } catch (emailErr) {
          console.error("Email sending failed:", emailErr.message);
          return res.status(500).json({ message: "Booking saved but email sending failed." });
        }
      }
    );
  });
});

// ─── Route: POST /api/payment (mock payment) ───────────────────────────────────
app.post('/api/payment', (req, res) => {
  const { bookingId, cardNumber, expiry, cvc } = req.body;
  if (!bookingId || !cardNumber || !expiry || !cvc) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  console.log(`Payment received for booking #${bookingId}`);
  res.json({ message: 'Payment successful (mock).' });
});

// ─── Fallback: serve index.html at root ─────────────────────────────────────────
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Index', 'index.html'));
});

app.get('/login', (req, res) => {
  res.redirect('/');
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Registration', 'register.html'));
});

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

app.get('/messages', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'messages.html'));
});

app.get('/cleaners', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Cleaner', 'cleaners.html'));
});


app.get('/tables', (req, res) => {
  db.all(
    "SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%';",
    (err, rows) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Database error' });
      }
      const tableNames = rows.map(row => row.name);
      res.json({ tables: tableNames });
    }
  );
});





// Add this endpoint to your existing server.js

app.get('/api/cleaner-slots', (req, res) => {
  const { name, date } = req.query;
  if (!name || !date) {
    return res.status(400).json({ error: 'Cleaner name and date are required.' });
  }

  const predefinedSlots = [
    { startTime: '08:00', endTime: '11:00' },
    { startTime: '11:00', endTime: '14:00' },
    { startTime: '14:00', endTime: '17:00' },
    { startTime: '17:00', endTime: '20:00' }
  ];

  // Get cleaner ID by name
  db.get('SELECT id FROM cleaners WHERE name = ?', [name], (err, cleaner) => {
    if (err || !cleaner) {
      return res.status(404).json({ error: 'Cleaner not found.' });
    }

    const cleanerId = cleaner.id;

    db.all(
      'SELECT startTime FROM bookings WHERE cleanerId = ? AND date = ?',
      [cleanerId, date],
      (err, rows) => {
        if (err) {
          console.error('DB error:', err);
          return res.status(500).json({ error: 'Failed to fetch bookings.' });
        }

        const bookedTimes = rows.map(r => r.startTime);
        const availableSlots = predefinedSlots.filter(slot => !bookedTimes.includes(slot.startTime));

        res.json(availableSlots);
      }
    );
  });
});

// Endpoint to fetch data from any table
app.get('/table/:name', (req, res) => {
  const tableName = req.params.name;

  db.all(`SELECT * FROM ${tableName}`, (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(rows);
  });
});

app.get('/table', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'table.html'));
});

app.get('/send-email', async (req, res) => {
  try {
    await sendMail(
      'asmitasharmaaaa0@gmail.com',
      'Hello from Node',
      'This is a test email from Node.js',
      '<h1>Hello from Node.js</h1><p>This is a test email</p>'
    );
    res.send('Email sent successfully!');
  } catch (err) {
    res.status(500).send('Failed to send email');
  }
});

app.use(express.static(path.join(__dirname, 'public')));


app.use('/static', express.static(path.join(__dirname, 'public')));


// ─── Start server ────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`MyClean App stub server running at http://localhost:${PORT}`);
});

module.exports = app;
