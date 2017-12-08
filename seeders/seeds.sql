-- customers seeds --
insert into customers (first_name, last_name, username, password, email, phone_number, street_address, city, state, zip_code, user_rating, transaction, createdAt, updatedAt)
values ('chris', 'volonnino', 'cvols', 'password', 'chris.volonnino@gmail.com', '9083478101', '1140 garden street', 'hoboken', 'nj', 07030, 5.0, false, current_timestamp, current_timestamp);

-- vendors seeds --
insert into vendors (first_name, last_name, username, password, email, phone_number, street_address, city, state, zip_code, user_rating, transaction, createdAt, updatedAt)
values ('james', 'castanien', 'jcast', 'password', 'jcastanient@gmail.com', '1234567891', '1 go to lane', 'morristown', 'nj', 12345, 1.3, false, current_timestamp, current_timestamp);

-- transactions seeds --
insert into transactions (desired_currency, total_money, current_currency, transaction_location, exchange_rate, fees, total_charges, transaction, createdAt, updatedAt)
values ('USD', 500, 'Euros', 'Newark Liberty International Airport', 3.5, 10, 510, false, current_timestamp, current_timestamp);