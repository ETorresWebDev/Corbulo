﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Corbulo.Web.Models.Requests.CoursesRequest
{
    public class CourseUpdateRequest : AddRequest
    {
        [Required]
        public int Id { get; set; }
    }
}
