using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Corbulo.Web.Domain;
using Corbulo.Web.Models.Requests.UserOnboard;
using Corbulo.Web.Models.Responses;
using Corbulo.Web.Services;


namespace Corbulo.Web.Controllers.Api
{
    [AllowAnonymous]
    [RoutePrefix("api/user/onboard")]
    public class UserOnboardController : ApiController
    {
        [Route("{id:int}"), HttpGet]    
        public HttpResponseMessage Get(int id)
        {
            ItemResponse<OnboardRegistration> response = new ItemResponse<OnboardRegistration>();
            response.Item = UserOnboardService.Get(id);
            return Request.CreateResponse(response);
        }

        [Route("tab1/{id:int}"), HttpPut]
        public HttpResponseMessage Update1(UserOnboardUpdate1 model, int id)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
            SucessResponse response = new SucessResponse();
            UserOnboardService.Update1(model);
            return Request.CreateResponse(response);
        }

        [Route("tab2/{id:int}"), HttpPut]
        public HttpResponseMessage Update2(UserOnboardUpdate2 model, int id)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
            SucessResponse response = new SucessResponse();
            UserOnboardService.Update2(model);
            return Request.CreateResponse(response);
        }

        [Route("tab3/{id:int}"), HttpPut]
        public HttpResponseMessage Update3(UserOnboardUpdate3 model, int id)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
            SucessResponse response = new SucessResponse();
            UserOnboardService.Update3(model);
            return Request.CreateResponse(response);
        }

        [Route("tab4/{id:int}"), HttpPut]
        public HttpResponseMessage Update4(UserOnboardUpdate4 model, int id)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
            SucessResponse response = new SucessResponse();
            UserOnboardService.Update4(model);
            return Request.CreateResponse(response);
        }

        [Route("tab5/{id:int}"), HttpPut]
        public HttpResponseMessage Update5(UserOnboardUpdate5 model, int id)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
            SucessResponse response = new SucessResponse();
            UserOnboardService.Update5(model);
            return Request.CreateResponse(response);
        }
    }
}
