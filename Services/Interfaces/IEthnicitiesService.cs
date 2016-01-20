using Corbulo.Web.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Corbulo.Web.Services.Interfaces
{
    public interface IEthnicitiesService
    {
        List<Ethnicities> GetAll();
    }
}
