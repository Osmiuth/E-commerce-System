#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys
import time
from django.db import OperationalError, connections


def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)

def wait_for_db():
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
    max_retries = 30  # Adjust as needed
    retries = 0
    while retries < max_retries:
        try:
            # Try to establish a connection to the database
            conn = connections['default']
            conn.ensure_connection()
            print("Database connection successful!")
            return
        except OperationalError:
            print("Database connection error - retrying...")
            time.sleep(2)  # Wait before retrying
            retries += 1
    raise OperationalError("Failed to establish database connection after multiple retries")

# Wait for database to become available before proceeding
wait_for_db()

if __name__ == '__main__':
    main()
