from flask_wtf import FlaskForm
from wtforms import StringField, TextField, SubmitField, TextAreaField
from wtforms.validators import DataRequired, Length, Email

class ContactForm(FlaskForm):
    name = StringField('Name', [ DataRequired() ])
    email = StringField('Email', [ Email(message=('Please enter a valid email address.')), DataRequired() ])
    body = TextAreaField('Message', [ DataRequired(), Length(min=20, message=('Your message is not quite long enough, try again.')) ])
    submit = SubmitField('Send')