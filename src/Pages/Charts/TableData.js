
function mockDataTable(name, status, date, trackingId, city, creditCard) {
    return { name, status, date, trackingId, city, creditCard }
}

export const createMockData = [
    mockDataTable("Timothy Griffin", 'Pending', "4-10-2016", "3393702792", "New Castle", "Discover"),
    mockDataTable("Eric Lopez", 'Pending', "10/8/2018", "1635819743", "Los Angeles", "MasterCard"),
    mockDataTable("Adam Evans", 'Approved', "1/5/2013", "1369491368", "Franklin", "VISA"),
    mockDataTable("Joshua Gray", 'Approved', "9/10/2020", "400180223", "Reno", "American Express"),
    mockDataTable("James Hernandez", 'Pending', "31/5/2016", "485454938", "Hampton", "American Express"),
    mockDataTable("Stephanie Simmons", 'Pending', "30/5/2021", "1103090886", "Schaumburg", "MasterCard"),
    mockDataTable("Brandon King", 'Approved', "18/8/2014", "230176182", "Casey", "VISA"),
    mockDataTable("Timothy Griffin", 'Pending', "4-10-2016", "3393702792", "New Castle", "Discover"),
    mockDataTable("Eric Lopez", 'Pending', "10/8/2018", "1635819743", "Los Angeles", "MasterCard"),
    mockDataTable("Adam Evans", 'Approved', "1/5/2013", "1369491368", "Franklin", "VISA"),
    mockDataTable("Joshua Gray", 'Approved', "9/10/2020", "400180223", "Reno", "American Express"),
    mockDataTable("James Hernandez", 'Pending', "31/5/2016", "485454938", "Hampton", "American Express"),
    mockDataTable("Stephanie Simmons", 'Pending', "30/5/2021", "1103090886", "Schaumburg", "MasterCard"),
    mockDataTable("Brandon King", 'Approved', "18/8/2014", "230176182", "Casey", "VISA"),
    mockDataTable("Timothy Griffin", 'Pending', "4-10-2016", "3393702792", "New Castle", "Discover"),
    mockDataTable("Eric Lopez", 'Pending', "10/8/2018", "1635819743", "Los Angeles", "MasterCard"),
    mockDataTable("Adam Evans", 'Approved', "1/5/2013", "1369491368", "Franklin", "VISA"),
    mockDataTable("Joshua Gray", 'Approved', "9/10/2020", "400180223", "Reno", "American Express"),
    mockDataTable("James Hernandez", 'Pending', "31/5/2016", "485454938", "Hampton", "American Express"),
    mockDataTable("Stephanie Simmons", 'Pending', "30/5/2021", "1103090886", "Schaumburg", "MasterCard"),
    mockDataTable("Brandon King", 'Approved', "18/8/2014", "230176182", "Casey", "VISA")
]
console.log(createMockData.length)
