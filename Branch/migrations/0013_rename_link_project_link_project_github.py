# Generated by Django 4.0 on 2022-12-06 18:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Branch', '0012_alter_project_link'),
    ]

    operations = [
        migrations.RenameField(
            model_name='project',
            old_name='link',
            new_name='link_project_github',
        ),
    ]
