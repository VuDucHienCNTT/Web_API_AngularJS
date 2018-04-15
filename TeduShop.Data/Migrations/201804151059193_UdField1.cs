namespace TeduShop.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UdField1 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.ProductCategories", "DisplayOrder", c => c.Int());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.ProductCategories", "DisplayOrder", c => c.Int(nullable: false));
        }
    }
}
