# tests/test_models/test_base.py
import unittest
from models.base import Base

class TestBase(unittest.TestCase):

    def test_incrementing_id(self):
        b1 = Base()
        b2 = Base()
        b3 = Base()
        self.assertEqual(b1.id, 1)
        self.assertEqual(b2.id, 2)
        self.assertEqual(b3.id, 3)

    def test_custom_id(self):
        b = Base(42)
        self.assertEqual(b.id, 42)

    def test_mixed_id(self):
        b1 = Base()
        b2 = Base(100)
        b3 = Base()
        self.assertEqual(b1.id, 1)
        self.assertEqual(b2.id, 100)
        self.assertEqual(b3.id, 2)

if __name__ == '__main__':
    unittest.main()

