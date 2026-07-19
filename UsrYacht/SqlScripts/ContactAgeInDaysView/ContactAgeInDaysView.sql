--MSSQL

create or alter view UsrVwContactAgeDays
as
select Id as UsrId, Name as UsrName, BirthDate as UsrBirthDate,
datediff(day, BirthDate, getdate()) as UsrAgeDays,
Id as UsrParentContactId
from Contact


--PostgreSQL:

--create or replace view public."UsrVwContactAgeDays"
--as
--select "Id" as "UsrId", "Name" as "UsrName", "BirthDate" as "UsrBirthDate",
--CURRENT_DATE -"BirthDate" as "UsrAgeDays"
--from public."Contact"
--00:31:54	Dmytro Gamora:	create or alter view UsrVwContactAgeDays
--as
--select Id as UsrId, Name as UsrName, BirthDate as UsrBirthDate,
--datediff(day, BirthDate, getdate()) as UsrAgeDays,
--Id as UsrParentContactId