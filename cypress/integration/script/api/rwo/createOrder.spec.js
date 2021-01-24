/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {

    })

    before(() => {

    })

    it('Create an Order', () => {

        cy.request({
            method: 'POST',
            url: '/aftersales/api/token',
            form: false,
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                "username": "d8ASSAjunhr",
                "password": "789@Test",
                "client_type": "tablet",
                "BSSID": "WqIgjW1+jWvUu8rB0ip1Cq1/7geDz1PJ",
                "tablet_id": "c88a21df9e71ff54"
            }
        }).its('body')
            .as('tokenResBodyASSA')
            .then(function () {
                cy.request({
                    method: 'POST',
                    url: '/aftersales/api/token',
                    form: false,
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: {
                        "username": "D8GUCHE1",
                        "password": "789@Test",
                        "client_type": "tablet",
                        "BSSID": "WqIgjW1+jWvUu8rB0ip1Cq1/7geDz1PJ",
                        "tablet_id": "c88a21df9e71ff54"
                    }
                }).its('body')
                    .as('tokenResBodyFM')
                    .then(function () {
                        cy.request({
                            method: 'POST',
                            url: '/aftersales/api/token',
                            form: false,
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: {
                                "username": "D8PARTS",
                                "password": "789@Test",
                                "client_type": "tablet",
                                "BSSID": "WqIgjW1+jWvUu8rB0ip1Cq1/7geDz1PJ",
                                "tablet_id": "c88a21df9e71ff54"
                            }
                        }).its('body')
                            .as('tokenResBodyPARTCLERK')
                            .then(function () {
                                cy.request({
                                    method: 'POST',
                                    url: '/aftersales/api/token',
                                    form: false,
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: {
                                        "username": "MJ",
                                        "password": "789@Test",
                                        "client_type": "tablet",
                                        "BSSID": "WqIgjW1+jWvUu8rB0ip1Cq1/7geDz1PJ",
                                        "tablet_id": "c88a21df9e71ff54"
                                    }
                                }).its('body')
                                    .as('tokenResBodyCONT')
                                    .then(function () {

                                        //生成空订单
                                        cy.request({
                                            method: 'POST',
                                            url: '/aftersales/tablet/orders',
                                            form: false,
                                            headers: {
                                                "Content-Type": "application/json",
                                                "authorization": "Bearer " + this.tokenResBodyASSA.jwt_token
                                            },
                                            body:
                                                {
                                                    "carPlateNumber": "桂A12345",
                                                    "vin": "",
                                                    "vehicleInfo":
                                                        {
                                                            "id": "9675004",
                                                            "dealerId": "d853b1313a",
                                                            "carPlateNumber": "桂A12345",
                                                            "mileage": 1024,
                                                            "insuranceCompanyName": "",
                                                            "vehicleProd":
                                                                {
                                                                    "id": "460538",
                                                                    "fin": "WDC2511631E016387",
                                                                    "vin": "WDCCB6DE6HE016387",
                                                                    "engineNumber": "27682630544185",
                                                                    "brand": "MB-PKW",
                                                                    "model": "R 320 CGI 4MATIC L",
                                                                    "modelLongName": "R320",
                                                                    "modelVariant": "2511631-CN6",
                                                                    "classLevel": "R",
                                                                    "descriptionCn": "梅赛德斯-奔驰 R 320 豪华型",
                                                                    "descriptionEn": "R 320 Luxury",
                                                                    "evaFirstRegistrationDate": "2017-04-02T00:00:00.000Z",
                                                                    "trim": "白兰地褐色真皮",
                                                                    "trimCode": "227",
                                                                    "paint": "曜岩黑",
                                                                    "paintCode": "197",
                                                                    "warranty3RValidity": true,
                                                                    "warranty3RValidityReason": "1",
                                                                    "modelYear": "808",
                                                                    "modelLongNameBasedOnModelVariant": "R320",
                                                                    "nextServiceDate": "2021-11-06T03:32:33.000Z",
                                                                    "nextServiceMileage": 22122,
                                                                    "lastServiceHistoryId": "5fc8d5862bb33d0006506f34",
                                                                    "saleCountry": "CHINA VOLKSREPUBLIK",
                                                                    "vehicleBusinessType": "PC"
                                                                },
                                                            "firstRegistrationDate": "2019-04-10T12:00:00.000Z",
                                                            "warrantyExpirationDate": "2020-04-02T00:00:00.000Z",
                                                            "annualCheckDate": "2025-04-30T00:00:00.000Z",
                                                            "mileageTimestamp": "2021-01-05T09:13:43.000Z",
                                                            "vehicleAffiliationType": 1,
                                                            "toUseGuaranteeStartDateReplaceFrd": false
                                                        },
                                                    "category": "AFTERSALES"
                                                }

                                        }).should((response) => {
                                            expect(response.status).to.eq(201)
                                        }).its('body')
                                            .as('orderIdBody')
                                            .then(function () {

                                                cy.wait(1)

                                                //送修人
                                                cy.request({
                                                    method: 'POST',
                                                    url: '/aftersales/tablet/vehicle-customers',
                                                    form: false,
                                                    headers: {
                                                        "Content-Type": "application/json",
                                                        "authorization": "Bearer " + this.tokenResBodyASSA.jwt_token,
                                                        "operationType": "update"
                                                    },
                                                    body:
                                                        {
                                                            "vehicleId": "460538",
                                                            "contactsId": "HtbCQpXuTvWFVn-blsOxTQ",
                                                            "contactsRole": "AFTER_SALES"
                                                        }
                                                }).should((response) => {
                                                    expect(response.status).to.eq(204)
                                                })


                                                cy.request({
                                                    method: 'PATCH',
                                                    url: "/aftersales/tablet/orders/" + this.orderIdBody.id,
                                                    form: false,
                                                    headers: {
                                                        "Content-Type": "application/json",
                                                        "authorization": "Bearer " + this.tokenResBodyASSA.jwt_token,
                                                        "x-otr-as-command": "contactsId"
                                                    },
                                                    body:
                                                        {
                                                            "contactsId": "HtbCQpXuTvWFVn-blsOxTQ",
                                                            "fullName": "wanghong"
                                                        }
                                                }).should((response) => {
                                                    expect(response.status).to.eq(200)
                                                })

                                                //个人车主
                                                cy.request({
                                                    method: 'POST',
                                                    url: '/aftersales/tablet/vehicle-customers',
                                                    form: false,
                                                    headers: {
                                                        "Content-Type": "application/json",
                                                        "authorization": "Bearer " + this.tokenResBodyASSA.jwt_token,
                                                        "operationType": "add"
                                                    },
                                                    body:
                                                        {"vehicleId": "460538", "ownerId": "RoR2O9vkSXG1M7X_4tVC8A"}
                                                }).should((response) => {
                                                    expect(response.status).to.eq(204)
                                                })

                                                //车辆归属
                                                cy.request({
                                                    method: 'PUT',
                                                    url: '/aftersales/tablet/vehicles/460538?vehicleAffiliationType=1',
                                                    form: false,
                                                    headers: {
                                                        "Content-Type": "application/json",
                                                        "authorization": "Bearer " + this.tokenResBodyASSA.jwt_token,
                                                        "x-otr-command": "setAffiliation"
                                                    },
                                                    body:
                                                        {}
                                                }).should((response) => {
                                                    expect(response.status).to.eq(204)
                                                })

                                                //车辆预检
                                                cy.request({
                                                    method: 'POST',
                                                    url: "/aftersales/tablet/orders/" + this.orderIdBody.id + "/pre-inspection-info",
                                                    form: false,
                                                    headers: {
                                                        "Content-Type": "application/json",
                                                        "authorization": "Bearer " + this.tokenResBodyASSA.jwt_token,
                                                    },
                                                    body:
                                                        {
                                                            "mileage": "6666",
                                                            "fuelLevel": "THREE_FOURTHS",
                                                            "items": []
                                                        }
                                                }).should((response) => {
                                                    expect(response.status).to.eq(201)
                                                })

                                                //预检发现
                                                cy.request({
                                                    method: 'POST',
                                                    url: "/aftersales/tablet/orders/" + this.orderIdBody.id + "/customer-requirement-comments",
                                                    form: false,
                                                    headers: {
                                                        "Content-Type": "application/json",
                                                        "authorization": "Bearer " + this.tokenResBodyASSA.jwt_token,
                                                    },
                                                    body:
                                                        {
                                                            "id": "3345",
                                                            "saObservation": "预检发现",
                                                            "saId": "D8ASSAJUNHR"
                                                        }
                                                }).should((response) => {
                                                    expect(response.status).to.eq(201)
                                                })

                                                //服务类型
                                                cy.request({
                                                    method: 'PATCH',
                                                    url: "/aftersales/tablet/orders/" + this.orderIdBody.id,
                                                    form: false,
                                                    headers: {
                                                        "Content-Type": "application/json",
                                                        "authorization": "Bearer " + this.tokenResBodyASSA.jwt_token,
                                                        "x-otr-as-command": "serviceTypes"

                                                    },
                                                    body:
                                                        ["05", "04"]
                                                }).should((response) => {
                                                    expect(response.status).to.eq(200)
                                                })

                                                //预计交车时间
                                                cy.request({
                                                    method: 'PATCH',
                                                    url: "/aftersales/tablet/orders/" + this.orderIdBody.id,
                                                    form: false,
                                                    headers: {
                                                        "Content-Type": "application/json",
                                                        "authorization": "Bearer " + this.tokenResBodyASSA.jwt_token,
                                                        "x-otr-as-command": "updateExpectedDeliverDate"
                                                    },
                                                    body:
                                                        {"expectedDeliverDate": "2089-01-24T16:00:00.000Z"}
                                                }).should((response) => {
                                                    expect(response.status).to.eq(204)
                                                })

                                                //添加工时
                                                cy.request({
                                                    method: 'POST',
                                                    url: "/aftersales/tablet/orders/" + this.orderIdBody.id + "/shopping-cart-items/",
                                                    form: false,
                                                    headers: {
                                                        "Content-Type": "application/json",
                                                        "authorization": "Bearer " + this.tokenResBodyASSA.jwt_token,
                                                        "x-otr-as-command": "refreshShoppingCartItems"
                                                    },
                                                    body:
                                                        [{
                                                            "type": "L",
                                                            "code": "001199",
                                                            "labourCode": "A",
                                                            "labourType": "A",
                                                            "labourRate": 575.22,
                                                            "sellingPrice": 649.9986,
                                                            "totalGrossPrice": 129.99972,
                                                            "status": "INITIATED",
                                                            "isCustomizedLabour": false,
                                                            "labourWorkUnit": 0.2,
                                                            "paymentCode": "C",
                                                            "accountCode": "RET90001",
                                                            "quantity": 0.2,
                                                            "source": "OTR",
                                                            "autoDiscountRate": 0,
                                                            "manualDiscountRate": 0,
                                                            "groupIndex": 0,
                                                            "description": "保养的附加工作，带可拆下球颈的挂车拖挂装置 润滑和检查功能，执行",
                                                            "taxRate": 0.13,
                                                            "currencyCode": "RMB",
                                                            "sundry": false,
                                                            "departmentCode": "W",
                                                            "children": []
                                                        }, {
                                                            "type": "L",
                                                            "code": "001207",
                                                            "labourCode": "A",
                                                            "labourType": "A",
                                                            "labourRate": 575.22,
                                                            "sellingPrice": 649.9986,
                                                            "totalGrossPrice": 129.99972,
                                                            "status": "INITIATED",
                                                            "isCustomizedLabour": false,
                                                            "labourWorkUnit": 0.2,
                                                            "paymentCode": "C",
                                                            "accountCode": "RET90001",
                                                            "quantity": 0.2,
                                                            "source": "OTR",
                                                            "autoDiscountRate": 0,
                                                            "manualDiscountRate": 0,
                                                            "groupIndex": 0,
                                                            "description": "保养的附加工作：清洁/润滑全景式滑动天窗机械系统 ​",
                                                            "taxRate": 0.13,
                                                            "currencyCode": "RMB",
                                                            "sundry": false,
                                                            "departmentCode": "W",
                                                            "children": []
                                                        }, {
                                                            "type": "L",
                                                            "code": "001209",
                                                            "labourCode": "A",
                                                            "labourType": "A",
                                                            "labourRate": 575.22,
                                                            "sellingPrice": 649.9986,
                                                            "totalGrossPrice": 649.9986,
                                                            "status": "INITIATED",
                                                            "isCustomizedLabour": false,
                                                            "labourWorkUnit": 1,
                                                            "paymentCode": "C",
                                                            "accountCode": "RET90001",
                                                            "quantity": 1,
                                                            "source": "OTR",
                                                            "autoDiscountRate": 0,
                                                            "manualDiscountRate": 0,
                                                            "groupIndex": 0,
                                                            "description": "保养的附加工作：更换火花塞 ​",
                                                            "taxRate": 0.13,
                                                            "currencyCode": "RMB",
                                                            "sundry": false,
                                                            "departmentCode": "W",
                                                            "children": []
                                                        }]
                                                }).should((response) => {
                                                    expect(response.status).to.eq(201)
                                                }).its('body.0')
                                                    .as('orderResbody')
                                                    .then(function () {

                                                        //获取订单号
                                                        cy.request({
                                                            method: 'GET',
                                                            url: "/aftersales/tablet/orders/" + this.orderIdBody.id + "/detail/",
                                                            form: false,
                                                            headers: {
                                                                "Content-Type": "application/json",
                                                                "authorization": "Bearer " + this.tokenResBodyASSA.jwt_token,
                                                                "forceLoadWipStatusFromDos": "false"
                                                            },
                                                        }).should((response) => {
                                                            expect(response.status).to.eq(200)
                                                        }).its('body')
                                                            .as('orderNumResbody')
                                                            .then(function () {

                                                                //登记进厂
                                                                cy.request({
                                                                    method: 'PATCH',
                                                                    url: "/aftersales/tablet/orders/" + this.orderIdBody.id,
                                                                    form: false,
                                                                    headers: {
                                                                        "Content-Type": "application/json",
                                                                        "authorization": "Bearer " + this.tokenResBodyASSA.jwt_token,
                                                                        "x-otr-as-command": "checkIn"
                                                                    },
                                                                    body:
                                                                        [{
                                                                            "type": "L",
                                                                            "code": "001199",
                                                                            "labourCode": "A",
                                                                            "labourType": "A",
                                                                            "labourRate": 575.22,
                                                                            "sellingPrice": 649.9986,
                                                                            "totalGrossPrice": 129.99972,
                                                                            "status": "INITIATED",
                                                                            "isCustomizedLabour": false,
                                                                            "labourWorkUnit": 0.2,
                                                                            "paymentCode": "C",
                                                                            "accountCode": "RET90001",
                                                                            "quantity": 0.2,
                                                                            "source": "OTR",
                                                                            "autoDiscountRate": 0,
                                                                            "manualDiscountRate": 0,
                                                                            "groupIndex": 0,
                                                                            "description": "保养的附加工作，带可拆下球颈的挂车拖挂装置 润滑和检查功能，执行",
                                                                            "taxRate": 0.13,
                                                                            "currencyCode": "RMB",
                                                                            "sundry": false,
                                                                            "departmentCode": "W",
                                                                            "children": []
                                                                        }, {
                                                                            "type": "L",
                                                                            "code": "001207",
                                                                            "labourCode": "A",
                                                                            "labourType": "A",
                                                                            "labourRate": 575.22,
                                                                            "sellingPrice": 649.9986,
                                                                            "totalGrossPrice": 129.99972,
                                                                            "status": "INITIATED",
                                                                            "isCustomizedLabour": false,
                                                                            "labourWorkUnit": 0.2,
                                                                            "paymentCode": "C",
                                                                            "accountCode": "RET90001",
                                                                            "quantity": 0.2,
                                                                            "source": "OTR",
                                                                            "autoDiscountRate": 0,
                                                                            "manualDiscountRate": 0,
                                                                            "groupIndex": 0,
                                                                            "description": "保养的附加工作：清洁/润滑全景式滑动天窗机械系统 ​",
                                                                            "taxRate": 0.13,
                                                                            "currencyCode": "RMB",
                                                                            "sundry": false,
                                                                            "departmentCode": "W",
                                                                            "children": []
                                                                        }, {
                                                                            "type": "L",
                                                                            "code": "001209",
                                                                            "labourCode": "A",
                                                                            "labourType": "A",
                                                                            "labourRate": 575.22,
                                                                            "sellingPrice": 649.9986,
                                                                            "totalGrossPrice": 649.9986,
                                                                            "status": "INITIATED",
                                                                            "isCustomizedLabour": false,
                                                                            "labourWorkUnit": 1,
                                                                            "paymentCode": "C",
                                                                            "accountCode": "RET90001",
                                                                            "quantity": 1,
                                                                            "source": "OTR",
                                                                            "autoDiscountRate": 0,
                                                                            "manualDiscountRate": 0,
                                                                            "groupIndex": 0,
                                                                            "description": "保养的附加工作：更换火花塞 ​",
                                                                            "taxRate": 0.13,
                                                                            "currencyCode": "RMB",
                                                                            "sundry": false,
                                                                            "departmentCode": "W",
                                                                            "children": []
                                                                        }]
                                                                }).should((response) => {
                                                                    expect(response.status).to.eq(204)
                                                                })

                                                                cy.wait(1000)

                                                                //分配车工项
                                                                cy.request({
                                                                    method: 'GET',
                                                                    url: "/aftersales/tablet/orders/" + this.orderIdBody.id + "/labor-line-items?statusNot=LOST_SALE,CANCELED",
                                                                    form: false,
                                                                    headers: {
                                                                        "Content-Type": "application/json",
                                                                        "authorization": "Bearer " + this.tokenResBodyASSA.jwt_token,
                                                                        "statusNot": "LOST_SALE,CANCELED"
                                                                    },
                                                                }).should((response) => {
                                                                    expect(response.status).to.eq(200)
                                                                }).its('body')
                                                                    .as('assignLaborBody')
                                                                    .then(function () {

                                                                        var json = this.assignLaborBody;

                                                                        json[0].isChecked = true;
                                                                        json[0].groupIndex = 0;
                                                                        json[0].displayStatus = "INITIATED";
                                                                        json[0].isLaborAssigned = true;
                                                                        json[1].isChecked = true;
                                                                        json[1].groupIndex = 0;
                                                                        json[1].displayStatus = "INITIATED";
                                                                        json[1].isLaborAssigned = true;
                                                                        json[2].isChecked = true;
                                                                        json[2].groupIndex = 0;
                                                                        json[2].displayStatus = "INITIATED";
                                                                        json[2].isLaborAssigned = true;

                                                                        cy.request({
                                                                            method: 'PATCH',
                                                                            url: "/aftersales/tablet/orders/" + this.orderIdBody.id + "/labor-line-items",
                                                                            form: false,
                                                                            headers: {
                                                                                "Content-Type": "application/json",
                                                                                "authorization": "Bearer " + this.tokenResBodyASSA.jwt_token,
                                                                            },
                                                                            body:
                                                                            json
                                                                        }).should((response) => {
                                                                            expect(response.status).to.eq(200);
                                                                        })
                                                                    })

                                                                //分配车工项
                                                                cy.request({
                                                                    method: 'GET',
                                                                    url: "/aftersales/tablet/orders/" + this.orderIdBody.id + "/labor-line-items?statusNot=LOST_SALE,CANCELED",
                                                                    form: false,
                                                                    headers: {
                                                                        "Content-Type": "application/json",
                                                                        "authorization": "Bearer " + this.tokenResBodyASSA.jwt_token,
                                                                        "statusNot": "LOST_SALE,CANCELED"
                                                                    },
                                                                }).should((response) => {
                                                                    expect(response.status).to.eq(200)
                                                                }).its('body')
                                                                    .as('assignLaborBody')
                                                                    .then(function () {

                                                                        var json = this.assignLaborBody;

                                                                        json[0].isChecked = true;
                                                                        json[0].groupIndex = 0;
                                                                        json[0].displayStatus = "INITIATED";
                                                                        json[1].isChecked = true;
                                                                        json[1].groupIndex = 0;
                                                                        json[1].displayStatus = "INITIATED";
                                                                        json[2].isChecked = true;
                                                                        json[2].groupIndex = 0;
                                                                        json[2].displayStatus = "INITIATED";

                                                                        cy.request({
                                                                            method: 'PATCH',
                                                                            url: "/aftersales/tablet/orders/" + this.orderIdBody.id + "/labor-line-items",
                                                                            form: false,
                                                                            headers: {
                                                                                "Content-Type": "application/json",
                                                                                "authorization": "Bearer " + this.tokenResBodyASSA.jwt_token,
                                                                            },
                                                                            body:
                                                                            json
                                                                        }).should((response) => {
                                                                            expect(response.status).to.eq(200);
                                                                        })
                                                                    })

                                                                //开钟关钟
                                                                cy.request({
                                                                    method: 'POST',
                                                                    url: "/api/sales-website/technician-idle-infos/batch-clock-on",
                                                                    form: false,
                                                                    headers: {
                                                                        "Content-Type": "application/json",
                                                                        "authorization": "Bearer " + this.tokenResBodyCONT.jwt_token,
                                                                    },
                                                                    body: {
                                                                        "technicianIds": [314],
                                                                        "idleTypeId": 16,
                                                                        "laborItemStatus": "COMPLETED"
                                                                    }
                                                                }).should((response) => {
                                                                    expect(response.status).to.eq(201)
                                                                })


                                                                cy.request({
                                                                    method: 'GET',
                                                                    url: "/api/sales-website/job-cards?keyword=" + this.orderNumResbody.orderNumber,
                                                                    form: false,
                                                                    headers: {
                                                                        "Content-Type": "application/json",
                                                                        "authorization": "Bearer " + this.tokenResBodyCONT.jwt_token,
                                                                    },
                                                                }).should((response) => {
                                                                    expect(response.status).to.eq(200)
                                                                }).its('body.today.0')
                                                                    .as('jobcard')
                                                                    .then(function () {


                                                                        cy.request({
                                                                            method: 'GET',
                                                                            url: "/api/sales-website/job-cards/" + this.jobcard.id + "/labour-items",
                                                                            form: false,
                                                                            headers: {
                                                                                "Content-Type": "application/json",
                                                                                "authorization": "Bearer " + this.tokenResBodyCONT.jwt_token,
                                                                            },
                                                                        }).should((response) => {
                                                                            expect(response.status).to.eq(200)
                                                                        }).its('body')
                                                                            .as('laborItem')
                                                                            .then(function () {

                                                                                var labor = new Array()
                                                                                labor[0] = this.laborItem[0].id
                                                                                labor[1] = this.laborItem[1].id
                                                                                labor[2] = this.laborItem[2].id


                                                                                cy.request({
                                                                                    method: 'GET',
                                                                                    url: "/api/sales-website/technician-idle-infos?technicianId=314",
                                                                                    form: false,
                                                                                    headers: {
                                                                                        "Content-Type": "application/json",
                                                                                        "authorization": "Bearer " + this.tokenResBodyCONT.jwt_token,
                                                                                    },
                                                                                }).should((response) => {
                                                                                    expect(response.status).to.eq(200)
                                                                                }).its('body')
                                                                                    .as('technician')
                                                                                    .then(function () {

                                                                                        cy.request({
                                                                                            method: 'PATCH',
                                                                                            url: "/api/sales-website/technician-idle-infos/" + this.technician.id + "/clock-off/clock-on-labor-items",
                                                                                            form: false,
                                                                                            headers: {
                                                                                                "Content-Type": "application/json",
                                                                                                "authorization": "Bearer " + this.tokenResBodyCONT.jwt_token,
                                                                                            },
                                                                                            body:
                                                                                                {
                                                                                                    "laborItemIds": labor,
                                                                                                    "laborItemStatus": "IN_PROGRESS",
                                                                                                    "technicianId": 314,
                                                                                                    "technicianName": "杨威",
                                                                                                    "jobCardId": this.jobcard.id
                                                                                                }
                                                                                        }).should((response) => {
                                                                                            expect(response.status).to.eq(204)
                                                                                        })

                                                                                        cy.request({
                                                                                            method: 'POST',
                                                                                            url: "/api/sales-website/technician-idle-infos/batch-clock-on",
                                                                                            form: false,
                                                                                            headers: {
                                                                                                "Content-Type": "application/json",
                                                                                                "authorization": "Bearer " + this.tokenResBodyCONT.jwt_token,
                                                                                            },
                                                                                            body: {
                                                                                                "technicianIds": [314],
                                                                                                "idleTypeId": 16,
                                                                                                "laborItemStatus": "COMPLETED"
                                                                                            }
                                                                                        })


                                                                                        //添加零件
                                                                                        cy.request({
                                                                                            method: 'POST',
                                                                                            url: "/api/part-delivery/orders/0/shopping-cart-items",
                                                                                            form: false,
                                                                                            headers: {
                                                                                                "Content-Type": "application/json",
                                                                                                "authorization": "Bearer " + this.tokenResBodyPARTCLERK.jwt_token,
                                                                                            },
                                                                                            body:
                                                                                                {
                                                                                                    "createShoppingCartItemList": [{
                                                                                                        "analysisCode": "P",
                                                                                                        "binLocation": "1234567",
                                                                                                        "blockSales": false,
                                                                                                        "partNo": "A0000003400",
                                                                                                        "ccc": false,
                                                                                                        "createdBy": "D8PARTS",
                                                                                                        "dealerCode": "d853b1313a",
                                                                                                        "description": "牌照",
                                                                                                        "discountCode": "45",
                                                                                                        "accountCode": "RET90001",
                                                                                                        "fixedPrice": false,
                                                                                                        "invoiceStatus": "INITIATED",
                                                                                                        "location": "S",
                                                                                                        "nonStockItem": false,
                                                                                                        "paymentCode": "C",
                                                                                                        "quantity": 1,
                                                                                                        "saleAccount": "",
                                                                                                        "supplierAccount": "",
                                                                                                        "supplierInfo": "",
                                                                                                        "type": "P",
                                                                                                        "updateDemand": true,
                                                                                                        "vatCode": "C",
                                                                                                        "vatValue": 13,
                                                                                                        "sellingPriceVat": 0,
                                                                                                        "cost": 121.8306,
                                                                                                        "cccFlag": null,
                                                                                                        "salesText": null,
                                                                                                        "masterFileSalesText": "厂家销售文本 test syy",
                                                                                                        "code": "A0000003400",
                                                                                                        "discountRate": 0,
                                                                                                        "sellingPrice": 666
                                                                                                    }],
                                                                                                    "orderNumber": this.orderNumResbody.orderNumber,
                                                                                                    "serviceOrderId": this.orderIdBody.id,
                                                                                                    "orderSource": "RWO",
                                                                                                    "partServiceOrderId": null,
                                                                                                    "addedStatusJoin": false
                                                                                                }
                                                                                        }).should((response) => {
                                                                                            expect(response.status).to.eq(201)
                                                                                        }).its('body')
                                                                                            .as('partServiceOrder')
                                                                                            .then(function () {

                                                                                                cy.request({
                                                                                                    method: 'POST',
                                                                                                    url: "/api/part-delivery/orders/" + this.partServiceOrder.id + "/shopping-cart-items",
                                                                                                    form: false,
                                                                                                    headers: {
                                                                                                        "Content-Type": "application/json",
                                                                                                        "authorization": "Bearer " + this.tokenResBodyPARTCLERK.jwt_token,
                                                                                                    },
                                                                                                    body:
                                                                                                        {
                                                                                                            "createShoppingCartItemList": [{
                                                                                                                "analysisCode": "P",
                                                                                                                "binLocation": "1234567",
                                                                                                                "blockSales": false,
                                                                                                                "partNo": "A0000003400",
                                                                                                                "ccc": false,
                                                                                                                "createdBy": "D8PARTS",
                                                                                                                "dealerCode": "d853b1313a",
                                                                                                                "description": "牌照",
                                                                                                                "discountCode": "45",
                                                                                                                "accountCode": "RET90001",
                                                                                                                "fixedPrice": false,
                                                                                                                "invoiceStatus": "INITIATED",
                                                                                                                "location": "S",
                                                                                                                "nonStockItem": false,
                                                                                                                "paymentCode": "C",
                                                                                                                "quantity": 1,
                                                                                                                "saleAccount": "",
                                                                                                                "supplierAccount": "",
                                                                                                                "supplierInfo": "",
                                                                                                                "type": "P",
                                                                                                                "updateDemand": true,
                                                                                                                "vatCode": "C",
                                                                                                                "vatValue": 13,
                                                                                                                "sellingPriceVat": 0,
                                                                                                                "cost": 121.8306,
                                                                                                                "cccFlag": null,
                                                                                                                "salesText": null,
                                                                                                                "masterFileSalesText": "厂家销售文本 test syy",
                                                                                                                "code": "A0000003400",
                                                                                                                "discountRate": 0,
                                                                                                                "sellingPrice": 666
                                                                                                            }],
                                                                                                            "orderNumber": this.orderNumResbody.orderNumber,
                                                                                                            "serviceOrderId": this.orderIdBody.id,
                                                                                                            "orderSource": "RWO",
                                                                                                            "partServiceOrderId": this.partServiceOrder.id,
                                                                                                            "addedStatusJoin": false
                                                                                                        }
                                                                                                }).should((response) => {
                                                                                                    expect(response.status).to.eq(201)
                                                                                                })

                                                                                                cy.request({
                                                                                                    method: 'POST',
                                                                                                    url: "/api/parts-website/part-delivery/save-order?orderNumber=" + this.orderNumResbody.orderNumber,
                                                                                                    form: false,
                                                                                                    headers: {
                                                                                                        "Content-Type": "application/json",
                                                                                                        "authorization": "Bearer " + this.tokenResBodyPARTCLERK.jwt_token,
                                                                                                    },
                                                                                                    body:
                                                                                                        {
                                                                                                            "branchDealerId": "d853b1313a",
                                                                                                            "serviceOrderId": this.orderResbody.orderId,
                                                                                                            "updatedBy": "D8PARTS",
                                                                                                            "partServiceOrderDTO": {
                                                                                                                "orderSource": "RWO",
                                                                                                                "orderType": null,
                                                                                                                "orderNumber": this.orderNumResbody.orderNumber,
                                                                                                                "partServiceOrderId": this.partServiceOrder.id,
                                                                                                                "addedStatusJoin": false
                                                                                                            },
                                                                                                            "customerNumber": null,
                                                                                                            "accountCode": null
                                                                                                        }
                                                                                                }).should((response) => {
                                                                                                    expect(response.status).to.eq(201)
                                                                                                })

                                                                                                cy.request({
                                                                                                    method: 'DELETE',
                                                                                                    url: "/api/part-delivery/remove-unsaved?partServiceOrderId=" + this.partServiceOrder.id,
                                                                                                    form: false,
                                                                                                    headers: {
                                                                                                        "Content-Type": "application/json",
                                                                                                        "authorization": "Bearer " + this.tokenResBodyPARTCLERK.jwt_token,
                                                                                                    },
                                                                                                }).should((response) => {
                                                                                                    expect(response.status).to.eq(204)
                                                                                                })

                                                                                                //发货出库
                                                                                                cy.request({
                                                                                                    method: 'POST',
                                                                                                    url: "/api/parts-website/service-orders/detail?orderNumber=" + this.orderNumResbody.orderNumber,
                                                                                                    form: false,
                                                                                                    headers: {
                                                                                                        "Content-Type": "application/json",
                                                                                                        "authorization": "Bearer " + this.tokenResBodyPARTCLERK.jwt_token,
                                                                                                    },
                                                                                                    body: {}
                                                                                                }).should((response) => {
                                                                                                    expect(response.status).to.eq(200)
                                                                                                }).its('body.serviceOrder.shoppingCartItems')
                                                                                                    .as('partsOrderbody')
                                                                                                    .then(function () {

                                                                                                        var parts = new Array()
                                                                                                        parts[0] = this.partsOrderbody[0].id
                                                                                                        parts[1] = this.partsOrderbody[1].id

                                                                                                        cy.request({
                                                                                                            method: 'POST',
                                                                                                            url: "/api/parts-website/report/delivery/" + this.orderNumResbody.orderNumber,
                                                                                                            form: false,
                                                                                                            headers: {
                                                                                                                "Content-Type": "application/json",
                                                                                                                "authorization": "Bearer " + this.tokenResBodyPARTCLERK.jwt_token,
                                                                                                            },
                                                                                                            body: {
                                                                                                                "technicianName": "test技师",
                                                                                                                "technicianId": 180,
                                                                                                                "accountName": "厂商交易",
                                                                                                                "customerId": "HtbCQpXuTvWFVn-blsOxTQ",
                                                                                                                "companyId": null,
                                                                                                                "itemIds": parts
                                                                                                            }
                                                                                                        }).should((response) => {
                                                                                                            expect(response.status).to.eq(200)
                                                                                                        })

                                                                                                        //准备交车
                                                                                                        cy.request({
                                                                                                            method: 'PATCH',
                                                                                                            url: "/aftersales/tablet/orders/" + this.orderIdBody.id + ":carReady",
                                                                                                            form: false,
                                                                                                            headers: {
                                                                                                                "Content-Type": "application/json",
                                                                                                                "authorization": "Bearer " + this.tokenResBodyASSA.jwt_token,
                                                                                                            },
                                                                                                        }).should((response) => {
                                                                                                            expect(response.status).to.eq(204)
                                                                                                        })

                                                                                                        //申请结账
                                                                                                        cy.request({
                                                                                                            method: 'GET',
                                                                                                            url: "/aftersales/tablet/aftersales-orders/" + this.orderNumResbody.serviceOrderId + "/line-items?filter=canBeInvoiced",
                                                                                                            form: false,
                                                                                                            headers: {
                                                                                                                "Content-Type": "application/json",
                                                                                                                "authorization": "Bearer " + this.tokenResBodyASSA.jwt_token,
                                                                                                            },
                                                                                                        }).should((response) => {
                                                                                                            expect(response.status).to.eq(200)
                                                                                                        }).its('body')
                                                                                                            .as('lineItemId')
                                                                                                            .then(function () {

                                                                                                                var jsonObj1 = {"lineItemId": this.lineItemId[0].lineItemId}
                                                                                                                var jsonObj2 = {"lineItemId": this.lineItemId[1].lineItemId}
                                                                                                                var jsonObj3 = {"lineItemId": this.lineItemId[2].lineItemId}
                                                                                                                var jsonObj4 = {"lineItemId": this.lineItemId[3].lineItemId}
                                                                                                                var jsonObj5 = {"lineItemId": this.lineItemId[4].lineItemId}

                                                                                                                var lineItems = new Array();
                                                                                                                lineItems[0] = jsonObj1;
                                                                                                                lineItems[1] = jsonObj2;
                                                                                                                lineItems[2] = jsonObj3;
                                                                                                                lineItems[3] = jsonObj4;
                                                                                                                lineItems[4] = jsonObj5;

                                                                                                                cy.request({
                                                                                                                    method: 'POST',
                                                                                                                    url: "/aftersales/tablet/aftersales-orders/" + this.orderNumResbody.serviceOrderId + "/invoices:checkLineItems",
                                                                                                                    form: false,
                                                                                                                    headers: {
                                                                                                                        "Content-Type": "application/json",
                                                                                                                        "authorization": "Bearer " + this.tokenResBodyASSA.jwt_token,
                                                                                                                    },
                                                                                                                    body:
                                                                                                                    lineItems
                                                                                                                }).should((response) => {
                                                                                                                    expect(response.status).to.eq(200)
                                                                                                                })

                                                                                                                cy.request({
                                                                                                                    method: 'POST',
                                                                                                                    url: "/aftersales/tablet/aftersales-orders/" + this.orderNumResbody.serviceOrderId + "/invoices:createInvoice",
                                                                                                                    form: false,
                                                                                                                    headers: {
                                                                                                                        "Content-Type": "application/json",
                                                                                                                        "authorization": "Bearer " + this.tokenResBodyASSA.jwt_token,
                                                                                                                    },
                                                                                                                    body:
                                                                                                                        {
                                                                                                                            "serviceTypes": ["10", "04", "02", "13"],
                                                                                                                            "items": lineItems,
                                                                                                                            "displayRealPrice": false,
                                                                                                                            "headup": "contact"
                                                                                                                        }
                                                                                                                }).should((response) => {
                                                                                                                    expect(response.status).to.eq(200)
                                                                                                                }).its('body')
                                                                                                                    .as('invoiceNo')
                                                                                                                    .then(function () {

                                                                                                                        cy.request({
                                                                                                                            method: 'PATCH',
                                                                                                                            url: "/aftersales/tablet/aftersales-orders/" + this.orderNumResbody.serviceOrderId + "/invoices/" + this.invoiceNo,
                                                                                                                            form: false,
                                                                                                                            headers: {
                                                                                                                                "Content-Type": "application/json",
                                                                                                                                "authorization": "Bearer " + this.tokenResBodyASSA.jwt_token,
                                                                                                                            },
                                                                                                                        }).should((response) => {
                                                                                                                            expect(response.status).to.eq(204)
                                                                                                                        })

                                                                                                                        cy.request({
                                                                                                                            method: 'POST',
                                                                                                                            url: "/aftersales/tablet/print/order/" + this.orderNumResbody.serviceOrderId + ":withoutSignature?settings=%7B%22printType%22%3A%22proforma%22%2C%22invoiceId%22%3A%226919%22%7D",
                                                                                                                            form: false,
                                                                                                                            headers: {
                                                                                                                                "Content-Type": "application/json",
                                                                                                                                "authorization": "Bearer " + this.tokenResBodyASSA.jwt_token,
                                                                                                                            },
                                                                                                                            body:
                                                                                                                            lineItems
                                                                                                                        }).should((response) => {
                                                                                                                            expect(response.status).to.eq(200)
                                                                                                                        })

                                                                                                                        cy.request({
                                                                                                                            method: 'POST',
                                                                                                                            url: "/api/sales-website/accounting/printinvoice/after-sales-invoicing/RWO/" + this.invoiceNo,
                                                                                                                            form: false,
                                                                                                                            headers: {
                                                                                                                                "Content-Type": "application/json",
                                                                                                                                "authorization": "Bearer " + this.tokenResBodyFM.jwt_token,
                                                                                                                            },
                                                                                                                        }).should((response) => {
                                                                                                                            expect(response.status).to.eq(200)
                                                                                                                        })
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    })
                                                                                                            })
                                                                                                    })
                                                                                            })
                                                                                    })
                                                                            })
                                                                    })
                                                            })
                                                    })
                                            })
                                    })
                            })
                    })
            })
    })
})
