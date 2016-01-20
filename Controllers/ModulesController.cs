using Corbulo.Web.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Corbulo.Data;
using Corbulo.Web.Classes;

namespace Corbulo.Web.Controllers
{
    [RoutePrefix("Modules")]
    public class ModulesController : BaseController
    {
        public ModulesController(ISiteConfig config) : base(config)
        { }

        [Route("Add")]
        [Route("{id:int}/edit")]
        public ActionResult Manage(int id = 0)
        {
            ItemViewModel<int> model = new ItemViewModel<int>();
            model.Item = id;
            return View(model);
        }

        [Route]
        public ActionResult Index()
        {
            return View();
        }
    }
}
