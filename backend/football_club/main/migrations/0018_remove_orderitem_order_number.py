# Generated by Django 5.0.6 on 2024-06-03 21:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0017_remove_orderitem_created_at_remove_orderitem_status_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='orderitem',
            name='order_number',
        ),
    ]
