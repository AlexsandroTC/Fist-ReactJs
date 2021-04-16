using System.ComponentModel.DataAnnotations.Schema;

namespace Fist_ReactJs.Model
{
    [Table("Produto")]
    public class Produto
    {
        [Column("ID")]
        public int ID { get; set; }
        [Column("Descricao")]
        public string Descricao { get; set; }
    }
}