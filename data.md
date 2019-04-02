# DATA ARCHITECTURE OF NYX FORMS

### inquiry	
	|id_inquiry
	|name
	|picture
	|owner
	|link
### statistic
	|id_statistic
	|name
	|formula
### cluster
	|id_cluster
	|name
	|father
	|start_date
	|id_inquiry	
### form
	|id_form
	|id_cluster
	|name
### column_values
	|id_column
	|id_user
	|date
	|value
### report
	|id_report
	|id_form
	|name
	|start_date
### column
	|id_form
	|id_column
	|name
	|type
	|start_date
	|thru_date	
### user	
	|id_user
	|pseudo
	|picture
	|status
	|start_date
	|thru_date
### inquiry_user
	|id_user
	|id_inquiry
	|status
	|start_date
	|thru_date	
### cluster_user
	|id_user
	|id_cluster
	|status
	|start_date
	|thru_date
### report_statistic
	|id_report
	|id_statistic
	|id_column
