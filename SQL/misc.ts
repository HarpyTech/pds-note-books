/*
explain format=JSON select department_id, first_name, 
sum(salary) over(partition by department_id) as t_salary, 
sum(salary) over(partition by department_id rows between unbounded preceding and current row) as t11_salary, 
sum(salary) over(partition by department_id rows between 1 preceding and 1 following) as `11_salary`,
sum(salary) over(partition by department_id rows between unbounded preceding and unbounded following) as `uu_salary`,
sum(salary) over(partition by department_id rows between 2 preceding and 3 following) as `23_salary`,
salary 
from employees where department_id=50; 

*/

let data = {
  query_block: {
    select_id: 1,
    cost_info: {
      query_cost: "50.25"
    },
    windowing: {
      windows: [
        {
          name: "<unnamed window>",
          definition_position: 1,
          using_temporary_table: true,
          using_filesort: true,
          filesort_key: ["`department_id`"],
          frame_buffer: {
            using_temporary_table: true,
            optimized_frame_evaluation: true
          },
          functions: ["sum"]
        },
        {
          name: "<unnamed window>",
          definition_position: 2,
          using_temporary_table: true,
          functions: ["sum"]
        },
        {
          name: "<unnamed window>",
          definition_position: 3,
          using_temporary_table: true,
          frame_buffer: {
            using_temporary_table: true,
            optimized_frame_evaluation: true
          },
          functions: ["sum"]
        },
        {
          name: "<unnamed window>",
          definition_position: 4,
          using_temporary_table: true,
          frame_buffer: {
            using_temporary_table: true,
            optimized_frame_evaluation: true
          },
          functions: ["sum"]
        },
        {
          name: "<unnamed window>",
          definition_position: 5,
          last_executed_window: true,
          frame_buffer: {
            using_temporary_table: true,
            optimized_frame_evaluation: true
          },
          functions: ["sum"]
        }
      ],
      cost_info: {
        sort_cost: "45.00"
      },
      table: {
        table_name: "employees",
        access_type: "ref",
        possible_keys: ["department_id"],
        key: "department_id",
        used_key_parts: ["department_id"],
        key_length: "5",
        ref: ["const"],
        rows_examined_per_scan: 45,
        rows_produced_per_join: 45,
        filtered: "100.00",
        cost_info: {
          read_cost: "0.75",
          eval_cost: "4.50",
          prefix_cost: "5.25",
          data_read_per_join: "18K"
        },
        used_columns: ["employee_id", "first_name", "salary", "department_id"]
      }
    }
  }
};

/* 

explain format=JSON select * from employees where department_id=50;   
*/
data = {
  query_block: {
    select_id: 1,
    cost_info: {
      query_cost: "5.25"
    },
    table: {
      table_name: "employees",
      access_type: "ref",
      possible_keys: ["department_id"],
      key: "department_id",
      used_key_parts: ["department_id"],
      key_length: "5",
      ref: ["const"],
      rows_examined_per_scan: 45,
      rows_produced_per_join: 45,
      filtered: "100.00",
      cost_info: {
        read_cost: "0.75",
        eval_cost: "4.50",
        prefix_cost: "5.25",
        data_read_per_join: "18K"
      },
      used_columns: [
        "employee_id",
        "first_name",
        "last_name",
        "email",
        "phone_number",
        "hire_date",
        "job_id",
        "salary",
        "commission_pct",
        "manager_id",
        "department_id"
      ]
    }
  }
};

/*

explain format=JSON select count(*) as emp_count, sum(salary) as total_sal from employees where department_id=50; 
*/

data = {
  query_block: {
    select_id: 1,
    cost_info: {
      query_cost: "5.25"
    },
    table: {
      table_name: "employees",
      access_type: "ref",
      possible_keys: ["department_id"],
      key: "department_id",
      used_key_parts: ["department_id"],
      key_length: "5",
      ref: ["const"],
      rows_examined_per_scan: 45,
      rows_produced_per_join: 45,
      filtered: "100.00",
      cost_info: {
        read_cost: "0.75",
        eval_cost: "4.50",
        prefix_cost: "5.25",
        data_read_per_join: "18K"
      },
      used_columns: ["salary", "department_id"]
    }
  }
};
