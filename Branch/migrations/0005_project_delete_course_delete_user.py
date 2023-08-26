# Generated by Django 4.0 on 2022-12-06 18:33

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('Branch', '0004_alter_article_thumbnail_alter_course_thumbnail'),
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=20)),
                ('slug', models.SlugField(max_length=20, unique=True)),
                ('link', models.SlugField(unique=True)),
                ('preamble', models.CharField(max_length=90, null=True)),
                ('thumbnail', models.ImageField(null=True, upload_to='Images')),
                ('publish', models.DateTimeField(default=django.utils.timezone.now)),
                ('created', models.DateTimeField(auto_now=True)),
                ('status', models.CharField(choices=[('d', 'Draft'), ('p', 'Publish')], max_length=1)),
            ],
        ),
        migrations.DeleteModel(
            name='Course',
        ),
        migrations.DeleteModel(
            name='User',
        ),
    ]