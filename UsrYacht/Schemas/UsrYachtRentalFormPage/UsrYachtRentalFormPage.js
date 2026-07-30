define("UsrYachtRentalFormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "PageTitle",
				"values": {
					"caption": "#MacrosTemplateString(#ResourceString(PageTitle_caption)#)#",
					"visible": true,
					"headingLevel": "label"
				}
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_pdhckhu",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.UsrYachtRentalDS_UsrStartDate_usgcbc6",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "above",
					"tooltip": "",
					"pickerType": "date",
					"control": "$UsrYachtRentalDS_UsrStartDate_usgcbc6"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_x19zwiu",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.UsrYachtRentalDS_UsrEndDate_r8bmcwy",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "above",
					"tooltip": "",
					"pickerType": "date",
					"control": "$UsrYachtRentalDS_UsrEndDate_r8bmcwy"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NumberInput_93t6h5y",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.UsrYachtRentalDS_UsrTotalPrice_ocanj2u",
					"control": "$UsrYachtRentalDS_UsrTotalPrice_ocanj2u",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "above",
					"tooltip": "",
					"visible": true
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_ew4oo9t",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrYachtRentalDS_UsrCustomer_p4nonfq",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$UsrYachtRentalDS_UsrCustomer_p4nonfq"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_sxkx3ya",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_sxkx3ya_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_ew4oo9t",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_faqlivc",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrYachtRentalDS_UsrComment_tbz8rz0",
					"control": "$UsrYachtRentalDS_UsrComment_tbz8rz0",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "above"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 4
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrYachtRentalDS_UsrStartDate_usgcbc6": {
						"modelConfig": {
							"path": "UsrYachtRentalDS.UsrStartDate"
						}
					},
					"UsrYachtRentalDS_UsrEndDate_r8bmcwy": {
						"modelConfig": {
							"path": "UsrYachtRentalDS.UsrEndDate"
						}
					},
					"UsrYachtRentalDS_UsrCustomer_p4nonfq": {
						"modelConfig": {
							"path": "UsrYachtRentalDS.UsrCustomer"
						}
					},
					"UsrYachtRentalDS_UsrCustomer_p4nonfq_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"UsrYachtRentalDS_UsrComment_tbz8rz0": {
						"modelConfig": {
							"path": "UsrYachtRentalDS.UsrComment"
						}
					},
					"UsrYachtRentalDS_UsrTotalPrice_ocanj2u": {
						"modelConfig": {
							"path": "UsrYachtRentalDS.UsrTotalPrice"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"UsrYachtRentalDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrYachtRental",
								"loadParameters": {
									"options": {
										"pagingConfig": {
											"rowCount": 1,
											"rowsOffset": -1
										},
										"sortingConfig": {
											"columns": []
										}
									}
								},
								"allowCopyingRecords": false
							}
						}
					},
					"primaryDataSourceName": "UsrYachtRentalDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});