from src.calc import mul


def test_mul_integers():
    assert mul(2, 3) == 6


def test_mul_negative():
    assert mul(-2, 3) == -6
    assert mul(-2, -3) == 6


def test_mul_zero():
    assert mul(0, 5) == 0
    assert mul(5, 0) == 0
