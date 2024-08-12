# Write your MySQL query statement below
select a.machine_id , ROUND(AVG(b.timestamp - a.timestamp),3) as processing_time
from Activity a, Activity b
where a.machine_id = b.machine_id 
        and a.activity_type = "start" 
        and b.activity_type = "end"
group by a.machine_id;