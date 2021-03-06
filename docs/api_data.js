define({ "api": [
  {
    "type": "get",
    "url": "/admin/:id",
    "title": "Get an administrator",
    "name": "GetAdmin",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Admin id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Admin id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Admin login</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Admin password</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/admin/",
    "title": "Get all administrators",
    "name": "GetAdminList",
    "group": "Admin",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": ".",
            "description": "<p>Admin list</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/",
    "title": "Add an administrator",
    "name": "PostAdmin",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Admin login</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Admin password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Admin id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "put",
    "url": "/admin/:id",
    "title": "Update an administrator",
    "name": "UpdateAdmin",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Admin id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Admin login</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Admin password</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/import/",
    "title": "Add an import",
    "name": "PostImport",
    "group": "Import",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Import id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/import.js",
    "groupTitle": "Import"
  },
  {
    "type": "put",
    "url": "/import/:id",
    "title": "Update an import",
    "name": "UpdateImport",
    "group": "Import",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Import id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "reject_count",
            "description": "<p>Import reject count</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/import.js",
    "groupTitle": "Import"
  },
  {
    "type": "get",
    "url": "/personInCharge/:id",
    "title": "Get a person in charge",
    "name": "GetPersonInCharge",
    "group": "PersonInCharge",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Person in charge id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Person in charge id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Person in charge login</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Person in charge password</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Person in charge code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Person in charge name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>Person in charge first name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "new_mail",
            "description": "<p>Person in charge new mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "iban",
            "description": "<p>Person in charge iban</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bic",
            "description": "<p>Person in charge bic</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/personInCharge.js",
    "groupTitle": "PersonInCharge"
  },
  {
    "type": "get",
    "url": "/personInCharge/",
    "title": "Get all persons in charge",
    "name": "GetPersonInChargeList",
    "group": "PersonInCharge",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": ".",
            "description": "<p>Person in charge list</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/personInCharge.js",
    "groupTitle": "PersonInCharge"
  },
  {
    "type": "post",
    "url": "/personInCharge/",
    "title": "Add a person in charge",
    "name": "PostPersonInCharge",
    "group": "PersonInCharge",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Person in charge login</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Person in charge password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Person in charge code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Person in charge name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>Person in charge first name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "new_mail",
            "description": "<p>Person in charge new mail</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "iban",
            "description": "<p>Person in charge iban</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bic",
            "description": "<p>Person in charge bic</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Person in charge id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/personInCharge.js",
    "groupTitle": "PersonInCharge"
  },
  {
    "type": "put",
    "url": "/personInCharge/:id",
    "title": "Update a person in charge",
    "name": "UpdatePersonInCharge",
    "group": "PersonInCharge",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Person in charge id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>Person in charge login</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Person in charge password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Person in charge code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Person in charge name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>Person in charge first name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "new_mail",
            "description": "<p>Person in charge new mail</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "iban",
            "description": "<p>Person in charge iban</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bic",
            "description": "<p>Person in charge bic</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/personInCharge.js",
    "groupTitle": "PersonInCharge"
  },
  {
    "type": "get",
    "url": "/repayment/:id",
    "title": "Get a repayment",
    "name": "GetRepayment",
    "group": "Repayment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Student id for that repayment</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "student_id",
            "description": "<p>Student id for that repayment</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "membership_amount",
            "description": "<p>Repayment membership amount</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "repayable",
            "description": "<p>Is repayment repayable</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "non_repayment_reason",
            "description": "<p>Reason of non repayment</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "deadline",
            "description": "<p>Repayment deadline</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deal",
            "description": "<p>Repayment deal</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "divalto_balance",
            "description": "<p>Repayment DIVALTO balance</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "request_date",
            "description": "<p>Repayment request date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Repayment comment</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/repayment.js",
    "groupTitle": "Repayment"
  },
  {
    "type": "get",
    "url": "/repayment/",
    "title": "Get all repayments",
    "name": "GetRepaymentList",
    "group": "Repayment",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": ".",
            "description": "<p>Repayment list</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/repayment.js",
    "groupTitle": "Repayment"
  },
  {
    "type": "post",
    "url": "/repayment/",
    "title": "Add a repayment",
    "name": "PostRepayment",
    "group": "Repayment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "membership_amount",
            "description": "<p>Repayment membership amount</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "repayable",
            "description": "<p>Is repayment repayable</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "non_repayment_reason",
            "description": "<p>Reason of non repayment</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "deadline",
            "description": "<p>Repayment deadline</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deal",
            "description": "<p>Repayment deal</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "divalto_balance",
            "description": "<p>Repayment DIVALTO balance</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "request_date",
            "description": "<p>Repayment request date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Repayment comment</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "student_id",
            "description": "<p>Student id for that repayment</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/repayment.js",
    "groupTitle": "Repayment"
  },
  {
    "type": "put",
    "url": "/repayment/:id",
    "title": "Update a repayment",
    "name": "UpdateRepayment",
    "group": "Repayment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "student_id",
            "description": "<p>Student id for that repayment</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "membership_amount",
            "description": "<p>Repayment membership amount</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "repayable",
            "description": "<p>Is repayment repayable</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "non_repayment_reason",
            "description": "<p>Reason of non repayment</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "deadline",
            "description": "<p>Repayment deadline</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deal",
            "description": "<p>Repayment deal</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "divalto_balance",
            "description": "<p>Repayment DIVALTO balance</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "request_date",
            "description": "<p>Repayment request date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Repayment comment</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/repayment.js",
    "groupTitle": "Repayment"
  },
  {
    "type": "get",
    "url": "/student/:id",
    "title": "Get a student",
    "name": "GetStudent",
    "group": "Student",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Student id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Student id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Student name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>Student first name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Student code</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "person_in_charge_id",
            "description": "<p>Person in charge of student id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/student.js",
    "groupTitle": "Student"
  },
  {
    "type": "get",
    "url": "/student/",
    "title": "Get all students",
    "name": "GetStudentList",
    "group": "Student",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": ".",
            "description": "<p>Student list</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/student.js",
    "groupTitle": "Student"
  },
  {
    "type": "post",
    "url": "/student/",
    "title": "Add a student",
    "name": "PostStudent",
    "group": "Student",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Student name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>Student first name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Student code</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "person_in_charge_id",
            "description": "<p>Person in charge of student id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Student id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/student.js",
    "groupTitle": "Student"
  },
  {
    "type": "put",
    "url": "/student/:id",
    "title": "Update a student",
    "name": "UpdateStudent",
    "group": "Student",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Student id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Student name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>Student first name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Student code</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "person_in_charge_id",
            "description": "<p>Person in charge of student id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/student.js",
    "groupTitle": "Student"
  }
] });
