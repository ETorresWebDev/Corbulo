using Corbulo.Web.Domain;
using Corbulo.Web.Models.Requests;
using Corbulo.Web.Models.Responses;
using Corbulo.Web.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Corbulo.Web.Controllers.Api
{
    [RoutePrefix("api/Modules")]
    public class ModulesApiController : ApiController
    {
        [Route("echo"), HttpPost]
        public HttpResponseMessage EchoClassModule(ModuleAddRequest model)
        {
            if (ModelState.IsValid)
            {
                return Request.CreateResponse(HttpStatusCode.OK, model);
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
        }
    }
}
