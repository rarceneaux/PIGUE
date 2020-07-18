using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using System.Data.SqlClient;
using PIGUE.Models;
using System.Data.Common;
using System.Security.Cryptography.X509Certificates;

namespace PIGUE.DataAccess
{
    public class PlayerRepository
    {
        const string ConnectionString = "Server=localhost;Database=PiguePen;Trusted_Connection=True;";
        //GET ALL PLAYERS
        public IEnumerable<Player> GetAllPlayers()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                return db.Query<Player>("select * from players");
            }
        }
        public List<Player> GetPlayersFor(int playId)
        {
            var args = new { PlayId = playId };
            using (var db = new SqlConnection(ConnectionString))
            {
                return db.Query<Player>(@"select *
                        from Players
                            inner join PlayPlayers on Players.Id = PlayPlayers.PlayerId
                            Join Plays on PlayPlayers.PlayId = Plays.Id
                            WHERE Plays.Id = @PlayId" , args).ToList();
            }
        }
        public Player AddNewPlayer(Player player)
        {
            var sql = @" insert into Players(FirstName, LastName,Position, Img)
                        output inserted.*
                        values(@FirstName, @LastName,@Position,@Img)";

            using (var db = new SqlConnection(ConnectionString))
            {
                var result = db.QueryFirstOrDefault<Player>(sql, player);
                return result;
            }
        }
    }
}
