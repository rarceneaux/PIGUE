﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using System.Data.SqlClient;
using PIGUE.Models;
using System.Data.Common;


namespace PIGUE.DataAccess
{
    public class PlayRepositiory
    {
        const string ConnectionString = "Server=localhost;Database=Pigue;Trusted_Connection=True;";
        //GET ALL PLAYS
        public IEnumerable<Play> GetAllPlays()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                return db.Query<Play>("select * from plays");
            }
        }
        public Play AddNewPlay(Play play)
        {
            var sql = @"insert into Plays(Name,Type,FormationId)
                output inserted.*
                 values(@Name,@Type,@FormationId)";

            using (var db = new SqlConnection(ConnectionString))
            {
                var result = db.QueryFirstOrDefault<Play>(sql, play);
                return result;
            }
        }
    }
}
