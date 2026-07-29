namespace Terrasoft.Core.Process
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Drawing;
	using System.Globalization;
	using System.Text;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;
	using Terrasoft.Core.Process.Configuration;

	#region Class: UsrProcess_2b63beeMethodsWrapper

	/// <exclude/>
	public class UsrProcess_2b63beeMethodsWrapper : ProcessModel
	{

		public UsrProcess_2b63beeMethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask1Execute", ScriptTask1Execute);
		}

		#region Methods: Private

		private bool ScriptTask1Execute(ProcessExecutingContext context) {
			DateTime startDate = Get<DateTime>("StartDate");
			DateTime endDate = Get<DateTime>("EndDate");
			
			int days = (endDate - startDate).Days;
			
			if (days == 0)
			{
			    days = 1;
			}
			
			Set("RentalDays", days);
			return true;
		}

		#endregion

	}

	#endregion

}

