from flask import Flask, render_template, request
from forms import ContactForm
import os

# CSRF Protection
SECRET_KEY = os.urandom(32)

app = Flask(__name__)
app.config['DEBUG'] = True
app.config['SECRET_KEY'] = SECRET_KEY

@app.route('/', methods=['GET', 'POST'])
def index():
    form = ContactForm()
    if form.validate_on_submit():
        return 'Submitted! This will eventually change.'

    return render_template('index.html', form=form)