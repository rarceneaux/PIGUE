

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
Alter table Plays
ADD FOREIGN KEY (FormationId) REFERENCES Formations(Id)

insert into Plays(Name,[Type],[FormationName])
values('28 Buck Sweep QB Keep','Run','Wing Right')


insert into Plays(Name,[Type],FormationName)
values('30 Buck Trap','Run','Wing Right')


insert into Plays(Name,[Type],FormationName)
values('27 Buck Reverse','Run','Wing Right and Left')


insert into Plays(Name,[Type],FormationName)
values('29 Buck Sweep Bootleg','Pass','Wing Left')

--ADD NEW PLAY
insert into Plays(Name,[Type],FormationName)
output inserted.*
values('28 Buck Sweep Throwback','Pass','Wing Right')

insert into Plays(Name,[Type],FormationName)
output inserted.*
values('35 Belly','Run','Wing Left')

insert into Plays(Name,[Type],FormationName)
output inserted.*
values('36 Iso','Run','Wing Right')

insert into Plays(Name,[Type],FormationName)
output inserted.*
values('10 QB Sneak','Run','Power-I Stovepipe')

--GET ALL PLAYS
select* 
from Plays

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
values('Power II Stovepipe', 'https://www.football-tutorials.com/wp-content/uploads/2018/07/iformation.png')

select*
from Plays


select*
from Players




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
insert into Players(FirstName,LastName, Position)
output inserted.*
values('Odell','Beckham,Jr','WR')

delete from Players where FirstName = 'Donald';

Delete from Players;

select* from Players

create table PlayPlayers (
Id int not null Identity(1,1) Primary Key,
PlayId int not null,
PlayerId int not null,
FOREIGN KEY (PlayerId) REFERENCES Players(Id),
FOREIGN KEY (PlayId) REFERENCES Plays(Id)
)


--Add Players to A PLAY
insert into PlayPlayers(PlayId, PlayerId)
output inserted.*
values(2, 1006)

Update PlayPlayers
set PlayerId = 1
where Id = 1

--TO GET THE PLAYERS OF THE PLAY
SELECT FirstName, LastName, Position, Img
FROM Players
INNER JOIN PlayPlayers on Players.Id = PlayPlayers.PlayerId
JOIN Plays on PlayPlayers.PlayId = Plays.Id
WHERE Plays.Id = 2


select* 
From Players

update Players
Set img = 'https://wpcdn.us-east-1.vip.tn-cloud.net/www.abc6.com/content/uploads/2020/03/BRADY-2-BUCS.jpg'
where Id = 2;
	select*
	from Plays

update Players
set Position = 'QB'
where Id = 3


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


	DELETE FROM Plays WHERE Id= 1005;
