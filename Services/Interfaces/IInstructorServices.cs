using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Corbulo.Web.Domain;
using Corbulo.Web.Models.Requests.InstructorsRequest;
using Corbulo.Web.Models.Requests;

namespace Corbulo.Web.Services.Interfaces
{
    public interface IInstructorServices
    {
        int InsertInstructor(Corbulo.Web.Models.Requests.AddInstructorInfo model, string userId);

        void Update(UpdateInstructorInfo model);

        List<Instructors> GetInstructors(List<int> ids);

        Instructors GetInstructors(int id);

        List<Instructors> Instructors();

        void Delete(int id);
    }
}
