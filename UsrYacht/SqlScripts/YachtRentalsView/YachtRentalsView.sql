CREATE OR ALTER VIEW dbo.UsrVwYachtRental
AS
SELECT
    YR.Id AS UsrId,

    YR.UsrStartDate AS UsrRentalStart,
    YR.UsrEndDate AS UsrRentalEnd,

	YR.UsrCustomerId AS UsrCustomerId,

    
	Y.UsrManagerId AS UsrManagerId,

 CASE
        WHEN DATEDIFF(DAY, YR.UsrStartDate, YR.UsrEndDate) = 0
            THEN 1
        ELSE DATEDIFF(DAY, YR.UsrStartDate, YR.UsrEndDate)
    END AS UsrRentalDays,

   CASE
        WHEN DATEDIFF(DAY, YR.UsrStartDate, YR.UsrEndDate) = 0
            THEN 1
        ELSE DATEDIFF(DAY, YR.UsrStartDate, YR.UsrEndDate)
    END * Y.UsrPrice AS UsrTotalPriceEUR,

    
	YR.UsrParentYachtId AS UsrParentYachtId,
	
    YR.UsrComment AS UsrComment

FROM UsrYachtRental YR

left JOIN UsrYacht Y
    ON Y.Id = YR.UsrParentYachtId
GO