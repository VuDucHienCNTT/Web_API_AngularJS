namespace TeduShop.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UdRq_MaxLength : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Products", "Name", c => c.String(nullable: false, maxLength: 256));
            AlterColumn("dbo.Products", "Alias", c => c.String(nullable: false, maxLength: 256, unicode: false));
            AlterColumn("dbo.Products", "Image", c => c.String(maxLength: 256));
            AlterColumn("dbo.Products", "Description", c => c.String(maxLength: 500));
            AlterColumn("dbo.ProductCategories", "Name", c => c.String(nullable: false, maxLength: 256));
            AlterColumn("dbo.ProductCategories", "Alias", c => c.String(nullable: false, maxLength: 256, unicode: false));
            AlterColumn("dbo.ProductCategories", "Description", c => c.String(maxLength: 500));
            AlterColumn("dbo.ProductCategories", "Image", c => c.String(maxLength: 256));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.ProductCategories", "Image", c => c.String());
            AlterColumn("dbo.ProductCategories", "Description", c => c.String());
            AlterColumn("dbo.ProductCategories", "Alias", c => c.String(nullable: false));
            AlterColumn("dbo.ProductCategories", "Name", c => c.String(nullable: false));
            AlterColumn("dbo.Products", "Description", c => c.String());
            AlterColumn("dbo.Products", "Image", c => c.String());
            AlterColumn("dbo.Products", "Alias", c => c.String(nullable: false));
            AlterColumn("dbo.Products", "Name", c => c.String(nullable: false));
        }
    }
}
