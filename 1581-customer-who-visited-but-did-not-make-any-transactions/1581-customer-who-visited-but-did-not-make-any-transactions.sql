# Write your MySQL query statement below
select customer_id , count( transaction_id is null) as count_no_trans
from Visits v
left join Transactions p
on p.visit_id = v.visit_id
where p.visit_id is null
group by customer_id;