# Generated by Django 5.0.6 on 2024-05-26 08:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_fixture_match_image'),
    ]

    operations = [
        migrations.RenameField(
            model_name='fixture',
            old_name='match_image',
            new_name='away_image',
        ),
        migrations.AddField(
            model_name='fixture',
            name='home_image',
            field=models.ImageField(blank=True, upload_to='match_image'),
        ),
    ]