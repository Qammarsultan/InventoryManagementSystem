using System.ComponentModel.DataAnnotations;

namespace IMSystem.Model
{
    public class Product
    {
        [Key]
        public int ID { get; set; }

        [Required]
        public string ProductName { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public int Quantity { get; set; }


    }
}
