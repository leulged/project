# Generated by Django 5.0.6 on 2024-05-25 11:55

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Player',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('age', models.IntegerField()),
                ('country', models.CharField(max_length=255)),
                ('position', models.CharField(max_length=255)),
                ('image', models.ImageField(upload_to='player_images')),
            ],
            options={
                'ordering': ['name'],
            },
        ),
    ]
