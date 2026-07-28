namespace Terrasoft.Configuration
{
    using System;
    using System.ServiceModel;
    using System.ServiceModel.Activation;
    using System.ServiceModel.Web;
    using System.Web.SessionState;
    using Terrasoft.Core.DB;
    using Terrasoft.Web.Common;
    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class YachtService : BaseService, IReadOnlySessionState
    {
        [OperationContract]
        [WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        public decimal GetMaxPriceByDriveTypeId(string driveTypeId)
        {
            if (string.IsNullOrEmpty(driveTypeId))
            {
                return -1;
            }
            Select select = new Select(UserConnection)
                .Column(Func.Max("UsrPrice"))
                .From("UsrYacht")
                .Where("UsrDriveTypeId").IsEqual(Column.Parameter(new Guid(driveTypeId)))
                .And("UsrStatusId").IsEqual(Column.Parameter(new Guid("0ea81c7e-7ec3-4b38-b874-fe8baea9f666"))) // 1. Operational status Id
                as Select;
            decimal result = select.ExecuteScalar<decimal>();
            return result;
        }

        [OperationContract]
        [WebInvoke(Method = "GET", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        public string GetExample()
        {
            return "OK!";
        }
        [OperationContract]
        [WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        public decimal GetAvgPriceByDriveTypeId(string driveTypeId)
        {
            if (string.IsNullOrEmpty(driveTypeId))
            {
                return -1;
            }
            Select select = new Select(UserConnection)
                .Column(Func.Avg("UsrPrice"))
                .From("UsrYacht")
                .Where("UsrDriveTypeId").IsEqual(Column.Parameter(new Guid(driveTypeId)))
                .And("UsrStatusId").IsEqual(Column.Parameter(new Guid("0ea81c7e-7ec3-4b38-b874-fe8baea9f666"))) // 1. Operational status Id
                as Select;
            decimal result = select.ExecuteScalar<decimal>();
            return result;
        }
    }
}