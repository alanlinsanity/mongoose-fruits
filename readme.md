# 7 REST Routes for fruits

* New - GET - /fruits/new  (form)
* Create - POST - /fruits/ (do Create)
* Index - GET - /fruits (All fruits)
* Show - GET - /fruits/:id 

* Delete - DELETE  - /fruits/:id 
* Update - 

## Fruit

- name
- colour
- readyToEat


## Authorization & Authenicating

Auth - username, password


Model - User (username, password)


## Security 

INPUT ==> Hashing (Fast) ==> Output
Same input === > Same output 


AAAAA --- Hashing --11770b3ea657fe68cba19675143e4715c8de9d763d3c21a85af6b7513d43997d>

AAAAB ---- 0004c44dc96c76174b1b34802de9a798022572f65d52ee31a72892c31e1f834e


Encode =>  (2 way) - Slow

A => 65 => A

A => C, B => D, C => E, D => F


## Authorization

Login => Success => Passport
Vist + Passport => Passport check???

Vist => No passport =>  NO login 


Client ---------------> Server
           -- login --> validates ok
                        create a (memory) session (postbox- id with unit number:11-22

        <--- response (with a cookie, inside the cookie is the ID)
store cookie 


Client -- /secret ---->                                  Server 
       HTTP (corresponding cookie will follow auto) .    take out the cookie
                                                         match the id

                                                         able to access the secret???