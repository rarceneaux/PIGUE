

create table Plays (
Id int not null Identity(1,1) Primary Key,
Name varchar(100) not null,
[Type] varchar(100) not null,
FormationName varchar(100) null,
)

drop table Plays

ALTER TABLE Plays
DROP FOREIGN KEY (FormationId) REFERENCES Formations(Id);


--Add FK Formations
--Alter table Plays
--ADD FOREIGN KEY (FormationId) REFERENCES Formations(Id)

insert into Plays(Name,[Type],[FormationName])
values('28 Buck Sweep','Run','Wing Right')

select* from Plays

insert into Plays(Name,[Type],FormationName)
values('30 Buck Trap','Run','Wing Right')


insert into Plays(Name,[Type],FormationName)
values('27 Buck Reverse','Run','Wing Right & Left')


insert into Plays(Name,[Type],FormationName)
values('29 Buck Bootleg','Pass','Wing Left')

--ADD NEW PLAY
insert into Plays(Name,[Type],FormationName)
output inserted.*
values('28 Buck Throwback','Pass','Wing Right')

insert into Plays(Name,[Type],FormationName)
output inserted.*
values('36 Belly','Pass','Wing Left')

insert into Plays(Name,[Type],FormationName)
output inserted.*
values('36 Iso','Run','Wing Right')

insert into Plays(Name,[Type],FormationName)
output inserted.*
values('10 QB Sneak','Run','Power-I Stovepipe')

--GET ALL PLAYS
select* 
from Players

select* 
from Formations

delete from Players where Id = 13

select
	p.Id,
	p.Name,
	p.Type,
	p.FormationId,
	f.Name as FormationName
from Plays as p
join Formations as f
	on p.FormationId = f.Id

update plays 
set Name = 'Post Z'
where Id = 21

ALTER TABLE Plays
ADD FormationId int null;


select* from formations

insert into Plays (FormationId)


--FORMATIONS

create table Formations (
Id int not null Identity(1,1) Primary Key,
Name varchar(100) not null,
FormationImg nvarchar(500) null,
)

--ADD NEW FORMATIONS
insert into Formations(Name,FormationImg)
output inserted.*
values('Wing Ring','https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_861/https://www.football-tutorials.com/wp-content/uploads/2018/06/wing-t-offense-formation.jpg')

insert into Formations(Name,FormationImg)
output inserted.*
values('Wing Left','https://wingt-coach.com/wp-content/uploads/2016/10/Left-formation-fixed.png')

insert into Formations(Name,FormationImg)
output inserted.*
values('Trips Right','https://youth-football-plays-and-formations.com/wp-content/uploads/2013/05/trips-right-formation.jpg')


insert into Formations(Name,FormationImg)
output inserted.*
values('Power I Stovepipe','https://www.football-tutorials.com/wp-content/uploads/2018/07/iformation.png')

insert into Formations(Name,FormationImg)
output inserted.*
values('Power II Stovepipe', 'https://firebasestorage.googleapis.com/v0/b/pigue-8bf57.appspot.com/o/power-I-RT.jpg?alt=media&token=3d8e1e23-c504-41e8-afcc-2d50ab0518ed')

insert into Formations(Name,FormationImg)
output inserted.*
values('Wing Right & Left','https://firebasestorage.googleapis.com/v0/b/pigue-8bf57.appspot.com/o/Wing-Right%26Left.jpeg?alt=media&token=b69c0493-fb4f-4e68-9265-09fbb3f8c716')

select*
from PlayPlayers


select*
from Plays

select*
from Formations


delete from Plays where id = 


--THIS GETS THE PLAY , FORMATION AND FORMATION URL
select Plays.Name as PlayName, Formations.Name as FormationName, Formations.FormationImg as FormationImg, Players.FirstName
from Plays 
	join Formations on Plays.FormationId = Formations.Id
	join PlayPlayers on Plays.Id = PlayPlayers.PlayId
	left join Players on PlayPlayers.PlayerId = Players.Id



--CREATE PLAYERS Table
create table Players (
Id int not null Identity(1,1) Primary Key,
FirstName varchar(100) not null,
LastName varchar(100) not null,
Position varchar(100) not null,
Img nvarchar(500) null
)

--ADD Players to Table
insert into Players(FirstName,LastName, Position, Img)
output inserted.*
values('Jason','Whitten','TE','https://firebasestorage.googleapis.com/v0/b/pigue-8bf57.appspot.com/o/JasonWhitten.jpg?alt=media&token=d201c044-e3c0-41a9-b544-d8f4a523b055')


select* from Plays

delete from Plays where Id = 15

select* from Players

create table PlayPlayers (
Id int not null Identity(1,1) Primary Key,
PlayId int not null,
PlayerId int not null,
FOREIGN KEY (PlayerId) REFERENCES Players(Id),
FOREIGN KEY (PlayId) REFERENCES Plays(Id)
)


--Add Players to A PLAY

--Play 1 QB
insert into PlayPlayers(PlayId, PlayerId)
output inserted.*
values(1, 5)

--Play 1 RB
insert into PlayPlayers(PlayId, PlayerId)
output inserted.*
values(1, 7)

--Play 1 WR
insert into PlayPlayers(PlayId, PlayerId)
output inserted.*
values(1, 10)

--Play 1 WR
insert into PlayPlayers(PlayId, PlayerId)
output inserted.*
values(1, 9)

--Play 1 TE
insert into PlayPlayers(PlayId, PlayerId)
output inserted.*
values(1, 12)


--Play 2

insert into PlayPlayers(PlayId, PlayerId)
output inserted.*
values(2, 5)


insert into PlayPlayers(PlayId, PlayerId)
output inserted.*
values(2, 8)


insert into PlayPlayers(PlayId, PlayerId)
output inserted.*
values(2, 10)


insert into PlayPlayers(PlayId, PlayerId)
output inserted.*
values(2, 9)


insert into PlayPlayers(PlayId, PlayerId)
output inserted.*
values(2, 12)

--Play 3

insert into PlayPlayers(PlayId, PlayerId)
output inserted.*
values(3, 5)


insert into PlayPlayers(PlayId, PlayerId)
output inserted.*
values(3, 7)


insert into PlayPlayers(PlayId, PlayerId)
output inserted.*
values(3, 12)


insert into PlayPlayers(PlayId, PlayerId)
output inserted.*
values(3,11)


insert into PlayPlayers(PlayId, PlayerId)
output inserted.*
values(3, 10)


--Play 4

insert into PlayPlayers(PlayId, PlayerId)
output inserted.*
values(4, 5)


insert into PlayPlayers(PlayId, PlayerId)
output inserted.*
values(4, 7)


insert into PlayPlayers(PlayId, PlayerId)
output inserted.*
values(4, 10)


insert into PlayPlayers(PlayId, PlayerId)
output inserted.*
values(4,9)


insert into PlayPlayers(PlayId, PlayerId)
output inserted.*
values(4, 12)


--Play 5 

insert into PlayPlayers(PlayId, PlayerId)
output inserted.*
values(5, 6)


insert into PlayPlayers(PlayId, PlayerId)
output inserted.*
values(5, 8)


insert into PlayPlayers(PlayId, PlayerId)
output inserted.*
values(5, 9)


insert into PlayPlayers(PlayId, PlayerId)
output inserted.*
values(5,10)


insert into PlayPlayers(PlayId, PlayerId)
output inserted.*
values(5, 11)

--Play 6

insert into PlayPlayers(PlayId, PlayerId)
output inserted.*
values(6, 5)


insert into PlayPlayers(PlayId, PlayerId)
output inserted.*
values(6, 7)


insert into PlayPlayers(PlayId, PlayerId)
output inserted.*
values(6, 9)


insert into PlayPlayers(PlayId, PlayerId)
output inserted.*
values(6,10)


insert into PlayPlayers(PlayId, PlayerId)
output inserted.*
values(6, 11)






--Update PlayPlayers
--set PlayerId = 1
--where Id = 1

--TO GET THE PLAYERS OF THE PLAY
SELECT FirstName, LastName, Position, Img
FROM Players
INNER JOIN PlayPlayers on Players.Id = PlayPlayers.PlayerId
JOIN Plays on PlayPlayers.PlayId = Plays.Id
WHERE Plays.Id = 6


select* 
From Players

update Players
Set img = 'https://wpcdn.us-east-1.vip.tn-cloud.net/www.abc6.com/content/uploads/2020/03/BRADY-2-BUCS.jpg'
where Id = 2;
	select*
	from Plays

update Players
set Img = 'https://firebasestorage.googleapis.com/v0/b/pigue-8bf57.appspot.com/o/images%2FBRADY-2-BUCS.jpg?alt=media&token=0cb13fdd-e2c1-4573-a5cd-08c9b5b88d65'
where Id = 15


	select*
	from PlayPlayers


	select*
	from Formations



	select*
	from Players

	select*
	from Plays

	update Plays
	set Name = '28 Throw Back'
	where id = 5


	DELETE FROM Plays WHERE Id= 10;
