using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Corbulo.Web.Models.ViewModels;
using Corbulo.Web.Classes;
using Corbulo.Web.Enums;


namespace Corbulo.Web.Controllers
{
    [RoutePrefix("user/onboard")]
    public class UserOnboardController : BaseController
    {
        public UserOnboardController(ISiteConfig config) : base(config) { }

        // GET: UsersData
        [Route("Add")]
        [Route("{id:int}")]
        public ActionResult UserOnboardIndex(int id = 0)
        {
            UserOnboardViewModel model = new UserOnboardViewModel();
            model.UserId = new Guid();
            model.Genders = Gender.Unspecified.ToDictionaryByValue();
            model.EmploymentStatuses = EmploymentStatus.Unspecified.ToDictionaryByValue();
            model.AccreditatonId = AccreditationId.Unspecified.ToDictionaryByValue();
            model.Id = id;
            return View(model);
        }
    }
}
