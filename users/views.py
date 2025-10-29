from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic.edit import CreateView
from django.contrib.auth.forms import UserCreationForm
from django.views.generic import TemplateView


# Nueva Vista para la página de inicio
class HomePageView(TemplateView):
    template_name = "home.html"


class SignUpView(CreateView):
    # Usa el formulario integrado de creación de usuarios de Django
    form_class = UserCreationForm

    # Redirige al usuario a la página de login al completar el registro
    success_url = reverse_lazy("login")

    # Especifica el nombre del archivo de plantilla (template)
    template_name = "registration/signup.html"
