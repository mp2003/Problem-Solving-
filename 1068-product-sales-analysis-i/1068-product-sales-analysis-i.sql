# Write your MySQL query statement below
select product_name, year, price
from Sales s
join Product p
on p.product_id = s.product_id;