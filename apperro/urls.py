from django.contrib import admin
from django.urls import path, include
from users.views import HomePageView

urlpatterns = [
    path("admin/", admin.site.urls),
    # Incluye todas las URLs de autenticación:
    # login/, logout/, password_change/, etc.
    path("accounts/", include("django.contrib.auth.urls")),
    path("accounts/", include("users.urls")),
    path("", HomePageView.as_view(), name="home"),
]
