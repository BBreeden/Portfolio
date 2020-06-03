from flask import Flask, render_template, request, flash, redirect, url_for
from flask_mail import Mail, Message
from forms import ContactForm
import os

app = Flask(__name__)
app.config['DEBUG'] = True

# CSRF Protection
SECRET_KEY = os.urandom(32)
app.config['SECRET_KEY'] = SECRET_KEY

# EMail config
app.config.update(dict(
    MAIL_SERVER = 'smtp.googlemail.com',
    MAIL_PORT = 465,
    MAIL_USE_TLS = False,
    MAIL_USE_SSL = True,
    MAIL_USERNAME = '',
    MAIL_PASSWORD = ''
))
mail = Mail(app)

@app.route('/', methods=['GET', 'POST'])
def index():
    form = ContactForm()
    return render_template('index.html', form=form)

@app.route('/process_form', methods=['GET','POST'])
def process_form():
    if request.method == 'POST':
        # msg = Message('A Message from your Portfolio', sender='bbtimeless@gmail.com', recipients=['breedenb@gmail.com'])
        # msg.body = (request.form['name'] + '\n' + request.form['email'] + '\n' + request.form['body'])
        # mail.send(msg)
        return 'Ta DA!'
    elif request.method == 'GET':
        return redirect(url_for('index'))