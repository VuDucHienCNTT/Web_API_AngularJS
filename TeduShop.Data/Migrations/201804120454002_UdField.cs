namespace TeduShop.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UdField : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ProductCategories", "DisplayOrder", c => c.Int(nullable: false));
            DropColumn("dbo.ProductCategories", "DislayOrder");
        }
        
        public override void Down()
        {
            AddColumn("dbo.ProductCategories", "DislayOrder", c => c.Int(nullable: false));
            DropColumn("dbo.ProductCategories", "DisplayOrder");
        }
    }
}
