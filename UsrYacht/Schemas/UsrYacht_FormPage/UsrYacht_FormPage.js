define("UsrYacht_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"allowToggleClose": true
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrYacht"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "ebb8181d-65ab-4ed4-9f1d-00dea9dbbc1b",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_ihciv7q",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_ihciv7q_caption)#",
					"color": "outline",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "actions-button-icon",
					"menuItems": [],
					"clickMode": "menu"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RunAvgProcessMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(RunAvgProcessMenuItem_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrCalcAverageTicketPriceProcess",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"notificationText": "#ResourceString(RunAvgProcessMenuItem_notificationText)#",
							"recordIdProcessParameterName": "YachtIdParameter"
						}
					},
					"icon": "calculator-icon"
				},
				"parentName": "Button_ihciv7q",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RunMaxPriceWebServiceMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(RunMaxPriceWebServiceMenuItem_caption)#",
					"visible": true,
					"clicked": {
						"request": "usr.RunMaxPriceWebServiceRequest"
					},
					"icon": "rocket-icon"
				},
				"parentName": "Button_ihciv7q",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GenerateRentalsMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GenerateRentalsMenuItem_caption)#",
					"visible": true,
					"icon": "database-icon",
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrGenerateYachtRentals",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "YachtId"
						}
					}
				},
				"parentName": "Button_ihciv7q",
				"propertyName": "menuItems",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PushMeButton_caption)#",
					"color": "outline",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "copilot-rewrite-friendly-icon",
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"clickMode": "default"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_yfrtn5m",
					"control": "$PDS_UsrPrice_yfrtn5m",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TicketPrice",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrTicketPrice_kxctbl7",
					"control": "$PDS_UsrTicketPrice_kxctbl7",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"visible": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DriveType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrDriveType_2wbfrz9",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrDriveType_2wbfrz9",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Status",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrStatus_3nu8aa3",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrStatus_3nu8aa3",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_w2rn5wn",
					"control": "$PDS_UsrComment_w2rn5wn",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_mlgfm22",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrManager_mlgfm22",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "PassengersCount",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPassengersCount_ui2eq6z",
					"control": "$PDS_UsrPassengersCount_ui2eq6z",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Input_br785jb",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.EmailInput",
					"label": "#ResourceString(Input_br785jb_label)#",
					"control": "$PDS_UsrManagerEmail_5a43vg9",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
					"multiline": false,
					"labelPosition": "auto",
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Country",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCountry_n1691xo",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrCountry_n1691xo",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "City",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCity_y77hdk4",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrCity_y77hdk4",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "Number",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrNumber_t28lfzz",
					"control": "$PDS_UsrNumber_t28lfzz",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
					"multiline": false,
					"labelPosition": "auto",
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "NumberInput_8dop2xb",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrLength_u3xlw02",
					"control": "$PDS_UsrLength_u3xlw02",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "Input_dgbq9v7",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 6,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrCaptain_4tu38wu",
					"control": "$PDS_UsrCaptain_4tu38wu",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "MultiSelect_l6x4kaf",
				"values": {
					"type": "crt.MultiSelect",
					"label": "#ResourceString(MultiSelect_l6x4kaf_label)#",
					"recordId": "$Id",
					"recordRelationColumnName": "UsrParentYacht",
					"selectSchemaName": "UsrYachtCategoriesStorage",
					"selectColumnName": "UsrCategory",
					"visible": true,
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"required": false
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_6x0yj77",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_6x0yj77_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_9745k56",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_6x0yj77",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_gz24rp9",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_9745k56",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_ahn1sm1",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_ahn1sm1_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrYachtRental",
							"defaultValues": [
								{
									"attributeName": "UsrParentYacht",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_gz24rp9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_1halscg",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_1halscg_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_xezmpo6DS"
						}
					}
				},
				"parentName": "FlexContainer_gz24rp9",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_3vkdct1",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_3vkdct1_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_gz24rp9",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_nbq2boo",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_nbq2boo_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "YachtRentalGridDetail"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_3vkdct1",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_292783x",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_292783x_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrYachtRental"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_3vkdct1",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_bl4kwfl",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_bl4kwfl_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_bl4kwfl_GridDetail_xezmpo6",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_xezmpo6"
										]
									}
								]
							},
							{
								"attribute": "GridDetailSearchFilter_bl4kwfl_YachtRentalGridDetail",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"YachtRentalGridDetail"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_bl4kwfl_SearchValue",
							"GridDetailSearchFilter_bl4kwfl_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_gz24rp9",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_mi4hg64",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_6x0yj77",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YachtRentalGridDetail",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_xezmpo6",
					"activeRow": "$GridDetail_xezmpo6_ActiveRow",
					"selectionState": "$GridDetail_xezmpo6_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_xezmpo6_SelectionState"
					},
					"primaryColumnName": "GridDetail_xezmpo6DS_Id",
					"columns": [
						{
							"id": "89cad092-8309-69ad-745b-f619242bd18e",
							"code": "GridDetail_xezmpo6DS_UsrStartDate",
							"caption": "#ResourceString(GridDetail_xezmpo6DS_UsrStartDate)#",
							"dataValueType": 8,
							"width": 160
						},
						{
							"id": "2527a1ea-7b74-47ce-4c9f-99fcaa4a896e",
							"code": "GridDetail_xezmpo6DS_UsrEndDate",
							"caption": "#ResourceString(GridDetail_xezmpo6DS_UsrEndDate)#",
							"dataValueType": 8,
							"width": 134
						},
						{
							"id": "93eb9844-d9c9-3a15-2e45-76c6962bef8d",
							"code": "GridDetail_xezmpo6DS_UsrCustomer",
							"caption": "#ResourceString(GridDetail_xezmpo6DS_UsrCustomer)#",
							"dataValueType": 10,
							"width": 137
						},
						{
							"id": "acea4137-2bad-4890-b532-587653a7b8fc",
							"code": "GridDetail_xezmpo6DS_UsrParentYacht_UsrManager",
							"caption": "#ResourceString(GridDetail_xezmpo6DS_UsrParentYacht_UsrManager)#",
							"dataValueType": 10,
							"width": 139
						},
						{
							"id": "ad58cd94-5de9-a8df-f772-40867e8f689f",
							"code": "GridDetail_xezmpo6DS_UsrTotalPrice",
							"caption": "#ResourceString(GridDetail_xezmpo6DS_UsrTotalPrice)#",
							"dataValueType": 32
						},
						{
							"id": "81a4ac08-350b-51fc-d657-f98b30f9461c",
							"code": "GridDetail_xezmpo6DS_UsrComment",
							"caption": "#ResourceString(GridDetail_xezmpo6DS_UsrComment)#",
							"dataValueType": 28
						}
					],
					"placeholder": false,
					"bulkActions": [],
					"visible": true,
					"fitContent": true
				},
				"parentName": "GridContainer_mi4hg64",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_xezmpo6_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_xezmpo6DS",
							"filters": "$GridDetail_xezmpo6 | crt.ToCollectionFilters : 'GridDetail_xezmpo6' : $GridDetail_xezmpo6_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_xezmpo6_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "YachtRentalGridDetail",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_xezmpo6_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_xezmpo6DS",
							"filters": "$GridDetail_xezmpo6 | crt.ToCollectionFilters : 'GridDetail_xezmpo6' : $GridDetail_xezmpo6_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_xezmpo6_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_xezmpo6_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_xezmpo6_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "YachtRentalGridDetail",
							"filters": "$GridDetail_xezmpo6 | crt.ToCollectionFilters : 'GridDetail_xezmpo6' : $GridDetail_xezmpo6_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_xezmpo6_SelectionState"
						}
					}
				},
				"parentName": "YachtRentalGridDetail",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_xezmpo6_MergeBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Merge",
					"icon": "merge-icon",
					"clicked": {
						"request": "crt.MergeRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_xezmpo6DS",
							"selectionState": "$GridDetail_xezmpo6_SelectionState"
						}
					}
				},
				"parentName": "YachtRentalGridDetail",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetail_xezmpo6_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_xezmpo6DS",
							"filters": "$GridDetail_xezmpo6 | crt.ToCollectionFilters : 'GridDetail_xezmpo6' : $GridDetail_xezmpo6_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_xezmpo6_SelectionState"
						}
					}
				},
				"parentName": "YachtRentalGridDetail",
				"propertyName": "bulkActions",
				"index": 3
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPrice_yfrtn5m": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 300,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrDriveType_2wbfrz9": {
						"modelConfig": {
							"path": "PDS.UsrDriveType"
						}
					},
					"PDS_UsrDriveType_2wbfrz9_List": {
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
					"PDS_UsrStatus_3nu8aa3": {
						"modelConfig": {
							"path": "PDS.UsrStatus"
						}
					},
					"PDS_UsrStatus_3nu8aa3_List": {
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
					"PDS_UsrComment_w2rn5wn": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrManager_mlgfm22": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrManager_mlgfm22_List": {
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
					"PDS_UsrPassengersCount_ui2eq6z": {
						"modelConfig": {
							"path": "PDS.UsrPassengersCount"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 2,
									"message": "#ResourceString(PassengersCountCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrNumber_t28lfzz": {
						"modelConfig": {
							"path": "PDS.UsrNumber"
						}
					},
					"PDS_UsrCountry_n1691xo": {
						"modelConfig": {
							"path": "PDS.UsrCountry"
						}
					},
					"PDS_UsrCountry_n1691xo_List": {
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
					"PDS_UsrCity_y77hdk4": {
						"modelConfig": {
							"path": "PDS.UsrCity"
						}
					},
					"PDS_UsrCity_y77hdk4_List": {
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
					"PDS_UsrTicketPrice_kxctbl7": {
						"modelConfig": {
							"path": "PDS.UsrTicketPrice"
						}
					},
					"PDS_UsrManagerEmail_5a43vg9": {
						"modelConfig": {
							"path": "PDS.UsrManagerEmail_5a43vg9"
						}
					},
					"GridDetail_xezmpo6": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_xezmpo6DS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_bl4kwfl_GridDetail_xezmpo6",
									"loadOnChange": true
								},
								{
									"loadOnChange": true,
									"name": "GridDetail_xezmpo6_PredefinedFilter"
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "desc",
										"columnName": "UsrEndDate"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_xezmpo6DS_UsrStartDate": {
									"modelConfig": {
										"path": "GridDetail_xezmpo6DS.UsrStartDate"
									}
								},
								"GridDetail_xezmpo6DS_UsrEndDate": {
									"modelConfig": {
										"path": "GridDetail_xezmpo6DS.UsrEndDate"
									}
								},
								"GridDetail_xezmpo6DS_UsrCustomer": {
									"modelConfig": {
										"path": "GridDetail_xezmpo6DS.UsrCustomer"
									}
								},
								"GridDetail_xezmpo6DS_UsrParentYacht_UsrManager": {
									"modelConfig": {
										"path": "GridDetail_xezmpo6DS.UsrParentYacht_UsrManager"
									}
								},
								"GridDetail_xezmpo6DS_UsrTotalPrice": {
									"modelConfig": {
										"path": "GridDetail_xezmpo6DS.UsrTotalPrice"
									}
								},
								"GridDetail_xezmpo6DS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_xezmpo6DS.UsrComment"
									}
								},
								"GridDetail_xezmpo6DS_Id": {
									"modelConfig": {
										"path": "GridDetail_xezmpo6DS.Id"
									}
								}
							}
						}
					},
					"GridDetail_xezmpo6_PredefinedFilter": {
						"value": null
					},
					"MultiSelect_l6x4kaf_List_Items_Predefined_Filter": {
						"value": null
					},
					"PDS_UsrLength_u3xlw02": {
						"modelConfig": {
							"path": "PDS.UsrLength"
						}
					},
					"PDS_UsrCaptain_4tu38wu": {
						"modelConfig": {
							"path": "PDS.UsrCaptain"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_xezmpo6DS": [
							{
								"attributePath": "UsrParentYacht",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrYacht",
							"attributes": {
								"UsrManagerEmail_5a43vg9": {
									"path": "UsrManager.Email",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_xezmpo6DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrYachtRental",
							"attributes": {
								"UsrStartDate": {
									"path": "UsrStartDate"
								},
								"UsrEndDate": {
									"path": "UsrEndDate"
								},
								"UsrCustomer": {
									"path": "UsrCustomer"
								},
								"UsrParentYacht_UsrManager": {
									"type": "ForwardReference",
									"path": "UsrParentYacht.UsrManager"
								},
								"UsrTotalPrice": {
									"path": "UsrTotalPrice"
								},
								"UsrComment": {
									"path": "UsrComment"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "usr.PushButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					console.log("Button works...");
					Terrasoft.showInformation("My button was pressed.");
					var price = await request.$context.PDS_UsrPrice_yfrtn5m;
					console.log("Price = " + price);
					request.$context.PDS_UsrComment_w2rn5wn = "comment from JS code!";
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				/* The custom implementation of the system query handler. */
				handler: async (request, next) => {
      				if (request.attributeName === 'PDS_UsrPrice_yfrtn5m' || 		        // if price changed
					   request.attributeName === 'PDS_UsrPassengersCount_ui2eq6z' ) { 		// or Passenger count changed
						let price = await request.$context.PDS_UsrPrice_yfrtn5m;
						let passengers = await request.$context.PDS_UsrPassengersCount_ui2eq6z;
						let ticket_price = price / passengers;
						request.$context.PDS_UsrTicketPrice_kxctbl7 = ticket_price;
					}
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				/* The custom implementation of the system query handler. */
				handler: async (request, next) => {
      				if (request.attributeName === 'PDS_UsrTicketPrice_kxctbl7' ) { 		// or Passenger count changed
						console.log("Ticket Price = " + await request.$context.PDS_UsrTicketPrice_kxctbl7);
					}
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
			{
				request: "usr.RunMaxPriceWebServiceRequest",
				handler: async (request, next) => {
					console.log("Run web service button works...");

					// get id from drive type lookup type object
					var typeObject = await request.$context.PDS_UsrDriveType_2wbfrz9;
					var selectedDriveTypeId = "";
					if (typeObject) {
						selectedDriveTypeId = typeObject.value;
					}
					/* Create an instance of the HTTP client from @creatio-devkit/common. */
					const httpClientService = new sdk.HttpClientService();

					/* Specify the URL to run web service method. */
					const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
					const transferName = "rest";
					const serviceName = "YachtService";
					const methodName = "GetMaxPriceByDriveTypeId";
					const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);
					//const endpoint = "http://localhost/D1_Studio/0/rest/YachtService/GetMaxPriceByDriveTypeId";
					/* Send a POST HTTP request. The HTTP client converts the response body from JSON to a JS object automatically. */
					var params = {
						driveTypeId: selectedDriveTypeId
					};
					const response = await httpClientService.post(endpoint, params);
					
					console.log("response max price = " + response.body.GetMaxPriceByDriveTypeIdResult);
					
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			}

		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			/* The validator type must contain a vendor prefix.
			Format the validator type in PascalCase. */
			"usr.DGValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value >= minValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"usr.DGValidator": { 
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}

		}/**SCHEMA_VALIDATORS*/
	};
});