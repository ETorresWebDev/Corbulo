using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Corbulo.Web.Domain;
using Corbulo.Web.Services;
using Corbulo.Web.Models.Responses;
using Corbulo.Web.Services.Interfaces;

namespace Corbulo.Web.Controllers.Api
{
    [RoutePrefix("api/user/ethnicities")]
    public class EthnicitiesAPIController : ApiController
    {
        private IEthnicitiesService _ethnicitiesService;

        public EthnicitiesAPIController(IEthnicitiesService EthnicitiesService)
        {
            _ethnicitiesService = EthnicitiesService;
        }

        [Route, HttpGet]
        public HttpResponseMessage GetAll()
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }

            ItemsResponse<Ethnicities> response = new ItemsResponse<Ethnicities>();

            response.Items = _ethnicitiesService.GetAll();

            return Request.CreateResponse(response);
        }
    }
}
