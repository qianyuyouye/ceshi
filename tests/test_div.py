import pytest

from src.div import div


def test_div_normal():
    assert div(6, 3) == 2.0
    assert div(6, 2) == 3.0


def test_div_by_zero():
    with pytest.raises(ZeroDivisionError) as exc_info:
        div(1, 0)
    assert str(exc_info.value) == "除数不能为 0"
