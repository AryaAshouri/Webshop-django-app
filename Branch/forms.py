from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django import forms

class CreateUserForm(UserCreationForm):
	username = forms.CharField(max_length=20, min_length=3, label='', required=True,
        help_text='My help text', widget=forms.TextInput(attrs={'placeholder': 'Username'}))
	email = forms.CharField(max_length=20, min_length=3, label='', required=True,
        help_text='My help text', widget=forms.EmailInput(attrs={'placeholder': 'Email'}))
	password1 = forms.CharField(max_length=20, min_length=3, label='', required=True,
        help_text='My help text', widget=forms.PasswordInput(attrs={'placeholder': 'Password'}))
	password2 = forms.CharField(max_length=20, min_length=3, label='', required=True,
        help_text='My help text', widget=forms.PasswordInput(attrs={'placeholder': 'Confirm'}))

	class Meta:
		model = User
		fields = ["username", "email", "password1", "password2"]