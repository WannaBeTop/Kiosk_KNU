# Generated by Django 4.2.5 on 2023-10-01 14:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("signup", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="order",
            name="order_num",
            field=models.PositiveIntegerField(default=0, null=True),
        ),
    ]