using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using System.Data.SqlClient;
using PIGUE.Models;
using System.Data.Common;


namespace PIGUE.DataAccess
{
    public class PlayRepository
    {
        const string ConnectionString = "Server=localhost;Database=PiguePen;Trusted_Connection=True;";
        //GET ALL PLAYS
        public IEnumerable<Play> GetAllPlays()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                return db.Query<Play>(@"select
                            p.Id,
                            p.Name,
                            p.Type,
                            p.FormationId,
                            f.Name as FormationName
                        from Plays as p
                        join Formations as f
                            on p.FormationId = f.Id");
            }
        }
        public Play AddNewPlay(PlayForm play)
        {
            var sql = @"insert into Plays(Name,Type,FormationId)
                output inserted.*
                 values(@Name,@Type,@FormationId)";

            using (var db = new SqlConnection(ConnectionString))
            {
                var result = db.QueryFirstOrDefault<Play>(sql, play);

                foreach (PlayerSelectOption player in play.Players)
                {
                    
                    var playersql = @"insert into PlayPlayers(PlayerId, PlayId)
                                    values(@PlayerId,@PlayId)";
                    db.Query<PlayPlayers>(playersql, new { PlayId = result.Id, PlayerId = player.Value });
                }

                return result;
            }
        }
        public Play GetPlayById(int id)
        {
            var play = new Play();
            var sql = @"select Plays.Name as Name, Formations.Name as FormationName
                         from Plays
                            join Formations on Plays.FormationId = Formations.Id
                            where Plays.Id = @id";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { Id = id };
                play = db.QueryFirstOrDefault<Play>(sql, parameters);
            }
                return play;
        }
    }
}
