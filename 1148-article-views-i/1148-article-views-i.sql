# Write your MySQL query statement below
select distinct author_id as id
from Views v
where v.author_id = v.viewer_id 
order by id