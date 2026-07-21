-- EnableSysAdminUnitRootTriggerMSSQL
--MSSQL:
ALTER TABLE [dbo].[SysAdminUnit] ENABLE TRIGGER [TRSysAdminUnitRoot]

-- EnaableSysAdminUnitRootTriggerPostgreSQL
--PostgreSQL:
--ALTER TABLE "SysAdminUnit" ENABLE TRIGGER "TRSysAdminUnitRoot"